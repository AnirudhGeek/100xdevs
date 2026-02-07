//  partial<T> => this will make all the top level fields optional or maybe absent

type AdressN8 = {
  line1: string;
  city: string;
};

type User10 = {
  id: string;
  name: string;
  email?: string;
  address: AdressN8;
};

type UserPatch = Partial<User10>;

const patch10: UserPatch = { name: "Anirudh" }; // here we have used partial utility so if some of the fields are missing then also it can run fine
const patch11: UserPatch = { address: { city: "c1", line1: "dsfas" } };

// Required<T>     => when we are using required it will make all the fields mandatory no matter it is an optional field
type UserAllRequired10 = Required<User10>;
const userAllPatch11: UserAllRequired10 = {
  id: "fasdfa",
  name: "adfasdf",
  address: {
    city: "fasdfad",
    line1: "dfafa",
  },
  email: "fasdfadfsa",
};

//Readonly<T>   => this will make all the top level fields as readonly
type ReadonlyUserN10 = Readonly<User10>;
const readOnlyUser: ReadonlyUserN10 = {
  id: "u3",
  name: "asdfadsfa",
  address: {
    line1: "line1",
    city: "city1",
  },
};
// readOnlyUser.name = "this"       => will through an error as it has a type of readonly

// Pick<T,K>    => keep only some keys
type PublicUserN10 = Pick<User10, "id" | "name">; // now we are only keeping these properties only
const publicUserN10: PublicUserN10 = {
  id: "u5",
  name: "Anirudh",
  // address : "sdfasdf"    this field is not allowed while picking
};

//Omit <T,K>    => remove some keys
type UserWithoutEmailN10 = Omit<User10, "email">;
const omitUserN10: UserWithoutEmailN10 = {
  id: "erdasads",
  name: "adfasdfihdsf",
  address: {
    line1: "sdfadsf",
    city: "asdfasdfa",
  },
};

//Record<K,V>
type RoleK = "admin" | "user" | "editor";
type RoleCheck = Record<RoleK, User10>;

const dirN10: RoleCheck = {
  admin: {
    id: "user10",
    name: "user10",
    address: {
      city: "city10",
      line1: "line10",
    },
  },
  user: {
    id: "user10",
    name: "user10",
    address: {
      city: "city10",
      line1: "line10",
    },
  },
  editor: {
    id: "user10",
    name: "user10",
    address: {
      city: "city10",
      line1: "line10",
    },
  },
};
