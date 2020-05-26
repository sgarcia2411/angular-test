import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { HeroModel } from '../models/hero.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collection = 'heroes';
  heroes: Observable<any[]>;
  heroRef: AngularFirestoreCollection<HeroModel>;

  constructor(private firestore: AngularFirestore) {
    console.log('FirebaseService');
    this.heroRef = this.firestore.collection<HeroModel>(this.collection);

    this.heroes = this.heroRef.snapshotChanges().pipe(
      map(actions => {
        const hero = actions.map(a => {
            const data = a.payload.doc.data() as HeroModel;
            const id = a.payload.doc.id;
            return { id, ...data };
        });
        console.log(hero);
        return hero;
      })
  );

    // this.heroes = firestore.collection(this.collection).valueChanges();
  }

  createHero(hero: HeroModel) {
    const ref = this.heroRef;
    return new Promise((resolve, reject) => {
      ref.add({...hero}).then(() => {
        resolve(true);
      }).catch(e => {
        reject(false);
      });
    });
  }

  updateHero(id: string, hero: HeroModel) {
    delete hero.id;
    const ref = this.heroRef;
    return new Promise((resolve, reject) => {
      ref.doc(id).set({ ...hero }).then(() => {
        resolve(true);
      }).catch(e => {
        reject(false);
      });
    });
  }

  deleteHero(id: string) {
    this.heroRef.doc(id).delete();
  }

  getHeroById(id: string) {
    return this.heroRef.doc(id).get();
  }

  getHeroes() {
    return this.heroes;
  }
}
