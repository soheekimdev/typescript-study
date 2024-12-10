"use strict";
// 클래스 (Classes)
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Country_name;
// implements 키워드를 사용해 interface 적용
class Continent {
    constructor(name) {
        this.continentName = name;
    }
    getContinentName() {
        return this.continentName;
    }
}
// 확장을 했다면 확장 키워드(extends)를 먼저 사용하고 그 다음 interface를 적용시켜야 한다(implements).
class Country extends Continent {
    constructor(continentName, name, capital) {
        super(continentName);
        _Country_name.set(this, void 0);
        __classPrivateFieldSet(this, _Country_name, name, "f");
        this.capital = capital;
    }
    getInfo() {
        return `${__classPrivateFieldGet(this, _Country_name, "f")}, ${this.capital}, ${this.getContinentName()}`;
    }
}
_Country_name = new WeakMap();
// let country = new Country();
// country.name = 'South Korea';
// country.capital = 'Seoul';
// let country = new Country('South Korea', 'Seoul');
let country = new Country('Asia', 'South Korea', 'Seoul');
console.log(country);
console.log(country.getInfo());
// 추상 클래스
class AbstractCountry {
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }
    // 일반 메서드는 기본 클래스와 동일하게 작성
    setup() {
        console.log('setup complete');
    }
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
