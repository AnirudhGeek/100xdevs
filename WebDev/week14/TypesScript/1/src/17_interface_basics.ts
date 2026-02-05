//interface => named shape for objects

interface User333 {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user333: User333 = {
  id: "1",
  name: "Anirudh",
  createdAt: new Date(),
  email: "adsfad@gmail.com",
};

interface Admin333 extends User333 {
  permission: string[];
}

const admin333: Admin333 = {
  id: "2",
  name: "Anirudh as admin",
  createdAt: new Date(),
  email: "adsdfadsfadfad@gmail.com",
  permission: ["admin"],
};

interface WithMeta1 {
  meta: {
    isActive: boolean;
  };
}

interface AdminMeta extends Admin333, WithMeta1 {}

const adminMeta: AdminMeta = {
  id: "2",
  name: "Anirudh as admin",
  createdAt: new Date(),
  email: "adsdfadsfadfad@gmail.com",
  permission: ["admin"],
  meta: {
    isActive: true,
  },
};
