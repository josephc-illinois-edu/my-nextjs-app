import Dexie, { Table } from 'dexie';

export interface Donor {
  id?: number;
  donorType: 'individual' | 'organization' | 'foundation' | 'corporation';
  firstName?: string;
  lastName?: string;
  organizationName?: string;
  email: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Gift {
  id?: number;
  donorId: number;
  giftType: string;
  amount: number;
  date: Date;
  fundNumber: string;
  purpose: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transmittal {
  id?: number;
  donorId: number;
  giftId: number;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  submittedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class TransmittalDatabase extends Dexie {
  donors!: Table<Donor, number>;
  gifts!: Table<Gift, number>;
  transmittals!: Table<Transmittal, number>;

  constructor() {
    super('transmittalDb');
    this.version(1).stores({
      donors: '++id, donorType, email, createdAt',
      gifts: '++id, donorId, giftType, amount, date',
      transmittals: '++id, donorId, giftId, status, submittedAt',
    });
  }
}

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
