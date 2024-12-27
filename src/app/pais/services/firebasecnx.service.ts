import { Injectable, NgZone } from '@angular/core';
import { Firestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireBaseCnxService {
  constructor(private _firebase: Firestore, private _auth: AuthService, private ngZone: NgZone) {}

  async saveCountries(country: string) {
    const user = await firstValueFrom(this._auth.user$);
    if (user && user.email) {
      const userDocRef = doc(this._firebase, `users/${user.email}`);
      await this.ngZone.runOutsideAngular(async () => {
        try {
          await updateDoc(userDocRef, {
            wishlist: arrayUnion(country),
          });
        } catch (error: any) {
          if (error.code === 'not-found') {
            await setDoc(userDocRef, { wishlist: [country] });
          } else {
            throw error;
          }
        }
      });
    }
  }

  async getCountries() {
    const user = await firstValueFrom(this._auth.user$);
    if (user && user.email) {
      const userDocRef = doc(this._firebase, `users/${user.email}`);
      return await this.ngZone.runOutsideAngular(async () => {
        const userSnapshot = await getDoc(userDocRef);
        return userSnapshot.exists() ? userSnapshot.data()['wishlist'] : [];
      });
    }
    return [];
  }
}
