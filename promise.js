
class SomeClass {
    constructor(nameFetcher) {
        this.nameFetcher = nameFetcher;
    }

    async getName() {
        const name = await this.nameFetcher.fetchName();
        return name + " " + "Bassyouni";
    }

}

module.exports = SomeClass;