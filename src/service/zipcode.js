export class ZipcodeService {
  list = {};

  constructor(defaults) {
    this.list = defaults ?? {};
  }

  async request(zipcode) {
    return (await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)).json();
  }

  async add(zipcode) {
    try {
      const body = await this.request(zipcode);

      if (body.erro) {
        throw new Error("Erro ao buscar o CEP");
      }

      Object.assign(this.list, { [zipcode]: body });
    } catch (e) {
      throw new Error("Erro ao buscar o CEP");
    }
  }

  remove(zipcode) {
    delete this.list[zipcode];
  }

  get() {
    return this.list;
  }
}
