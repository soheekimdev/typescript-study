// 클래스 (Classes)

// interface는 기본적으로 public함.
interface ContinentInterface {
  getContinentName(): string;
  // private, protected인 멤버는 intercace에 추가하지 않는다.
}

interface CountryInterface {
  capital: string;
  getInfo(): string;
}

// implements 키워드를 사용해 interface 적용
class Continent implements ContinentInterface {
  protected continentName: string;

  constructor(name: string) {
    this.continentName = name;
  }

  getContinentName() {
    return this.continentName;
  }
}

// 확장을 했다면 확장 키워드(extends)를 먼저 사용하고 그 다음 interface를 적용시켜야 한다(implements).
class Country extends Continent implements CountryInterface {
  #name: string;
  capital: string;

  constructor(continentName: string, name: string, capital: string) {
    super(continentName);
    this.#name = name;
    this.capital = capital;
  }

  getInfo() {
    return `${this.#name}, ${this.capital}, ${this.getContinentName()}`;
  }
}

// let country = new Country();

// country.name = 'South Korea';
// country.capital = 'Seoul';

// let country = new Country('South Korea', 'Seoul');

let country = new Country('Asia', 'South Korea', 'Seoul');

console.log(country);
console.log(country.getInfo());

// 추상 클래스
abstract class AbstractCountry {
  name: string;
  capital: string;

  constructor(name: string, capital: string) {
    this.name = name;
    this.capital = capital;
  }

  // 일반 메서드는 기본 클래스와 동일하게 작성
  setup(): void {
    console.log('setup complete');
  }

  // abstract 메서드는 추상 클래스 내부에서 시그니처만 정의하면 된다. 자세한 구현은 상속 받는 서브 클래스에서 한다.
  abstract displayInfo(): void;
}

// const myCountry = new AbstractCountry(); // error(추상클래스는 instance화 할 수 없다)
// 추상 클래스를 사용하려면 기본적인 클래스 인스턴스를 만드는 방법으로는 불가능하고, 클래스를 새로 만들어서 상속을 받아야 한다.
class MyCountry extends AbstractCountry {
  // 추상 클래스의 abstract 키워드가 들어간 멤버는 반드시 구현해야 한다.
  // 추상 클래스인 AbstractCountry에서는 시그니처(displayInfo())와 반환 타입(void)만 지정해줬지만,
  // 자세한 구현은 실제로 상속 받는 클래스(MyCountry) 내부에서 해야 한다.
  displayInfo() {
    console.log('display info called');
  }
}

const myCountry = new MyCountry('Germany', 'Berlin');
myCountry.setup();
myCountry.displayInfo();
