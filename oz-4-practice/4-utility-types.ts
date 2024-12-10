/* ------------- Partial<T> ------------- */
type User2 = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User2>;

type Product = {
  id: number;
  price: number;
};

type PartialProduct = Partial<Product>;

const product: PartialProduct = {
  // 아무 속성이 없어도 오류 발생하지 않음
};
// const product2: Product = {
//   // 속성이 없으면 오류 발생
// };

/* ------------- Readonly<T> ------------- */
type User3 = {
  id: number;
  name: string;
};

const user3: Readonly<User3> = {
  id: 1,
  name: 'John',
};

// user3.id = 10 // ts error (Cannot assign to 'id' because it is a read-only property.)
// user3.name = 'Amy' // ts error (Cannot assign to 'id' because it is a read-only property.)

/* ------------- Pick<T, K> ------------- */
type User4 = {
  id: number;
  name: string;
  email: string;
};

type UserWithNameOnly = Pick<User4, 'name'>;

const user4: UserWithNameOnly = {
  name: 'Lee',
};

/* ------------- Omit<T, K> ------------- */
type Product2 = {
  id: number;
  name: string;
  price: number;
  uniqueCode: number;
};

type ProductWithOmit = Omit<Product2, 'uniqueCode' | 'price'>;

/* ------------- Record<K, T> ------------- */
type Country = 'South Korea' | 'United States' | 'Canada';
type Capital = string;

type CountryCapitals = Record<Country, Capital>;

const capitals: CountryCapitals = {
  'South Korea': 'Seoul',
  'United States': 'Washington D.C',
  Canada: 'Ottawa',
};

type CountryInfo = {
  capital: string;
  population: number;
  continent: string;
};

type CountryInfoMap = Record<Country, CountryInfo>;

const countryInfo: CountryInfoMap = {
  'South Korea': {
    capital: 'Seoul',
    population: 51_000_000,
    continent: 'Asia',
  },
  'United States': {
    capital: 'Washington D.C',
    population: 331_000_000,
    continent: 'North America',
  },
  Canada: {
    capital: 'Ottawa',
    population: 83_000_000,
    continent: 'North America',
  },
};

/* ------------- Parameters<T> ------------- */
type SomeFunction = (id: number) => void;
type Param = Parameters<SomeFunction>;

function someFunction(...param: Param) {
  const [id] = param;
}

someFunction(100);

type SaveUser = (name: string, age: number) => void;
type Params = Parameters<SaveUser>;

function saveUser(...params: Params) {
  const [name, age] = params;
}

saveUser('David', 33);
