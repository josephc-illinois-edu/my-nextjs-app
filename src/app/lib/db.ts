import Dexie, { Table } from 'dexie';

export interface Donor {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Donation {
  id?: number;
  donorId: number;
  amount: number;
  date: Date;
  type: string;
  notes?: string;
  receiptGenerated: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class DonorDatabase extends Dexie {
  donors!: Table<Donor>;
  donations!: Table<Donation>;

  constructor() {
    super('DonorDB');
    this.version(1).stores({
      donors: '++id, name, email, createdAt',
      donations: '++id, donorId, amount, date, type',
    });
  }
}

export const db = new DonorDatabase();
