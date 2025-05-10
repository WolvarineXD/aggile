import { doc, getDoc, setDoc, increment } from 'firebase/firestore';
import { db } from './firebaseConfig';

export class VisitorCounter {
  private totalDocRef = doc(db, 'visitor_counts', 'total_visitors');

  public async incrementTotalVisitors(): Promise<number> {
    console.log('Attempting to increment total visitors...');
    try {
      await setDoc(this.totalDocRef, { count: increment(1) }, { merge: true });
      console.log('Increment successful');
      const updatedDoc = await getDoc(this.totalDocRef);
      const count = updatedDoc.exists() ? updatedDoc.data()?.count || 0 : 0;
      console.log('Fetched count:', count);
      return count;
    } catch (error) {
      console.error('Increment failed:', error);
      throw error;
    }
  }

  public async getTotalVisitors(): Promise<number> {
    console.log('Attempting to fetch total visitors...');
    try {
      const docSnap = await getDoc(this.totalDocRef);
      const count = docSnap.exists() ? docSnap.data()?.count || 0 : 0;
      console.log('Fetched count:', count);
      return count;
    } catch (error) {
      console.error('Fetch failed:', error);
      return 0;
    }
  }
}