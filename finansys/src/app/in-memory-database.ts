import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService{
  createDb() {
    const categories: Category[] = [
      { id: 1, name: "Moradia", description: 'Pagamentos de Contas da Casa'},
      { id: 1, name: "Saúde", description: 'Plano de Saúde e Remédios'},
      { id: 1, name: "Lazer", description: 'Cinema, parques, praia, etc'},
      { id: 1, name: "Salário", description: 'Recebimento de Salário'},
      { id: 1, name: "Freelas", description: 'Trabalhos como freelancer'}
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gás de cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "qualquer descrição para essa despesa" } as Entry,
      { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: "14/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 3, name: 'Salário na Empresa X', categoryId: categories[3].id, category: categories[3], paid: true, date: "15/10/2018", amount: "4405,49", type: "revenue" } as Entry,
      { id: 4, name: 'Aluguel de Filme', categoryId: categories[2].id, category: categories[2], paid: true, date: "16/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 5, name: 'Suplemenos', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 6, name: 'Vídeo Game da Filha', categoryId: categories[2].id, category: categories[2], paid: false, date: "14/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 11, name: 'Uber', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 12, name: 'Aluguel', categoryId: categories[2].id, category: categories[2], paid: false, date: "23/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 13, name: 'Gás de cozinha', categoryId: categories[1].id, category: categories[1], paid: false, date: "25/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 14, name: 'Pagamento pelo projeto XYZ', categoryId: categories[4].id, category: categories[4], paid: true, date: "25/10/2018", amount: "2980,00", type: "revenue" } as Entry,
      { id: 19, name: 'Aluguel de filme', categoryId: categories[2].id, category: categories[2], paid: false, date: "07/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 21, name: 'vídeo game da filha', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/11/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 22, name: 'cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "18/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 23, name: 'jiu jitsu', categoryId: categories[1].id, category: categories[1], paid: false, date: "21/11/2018", amount: "130,00", type: "expense" } as Entry,
      { id: 44, name: 'uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 55, name: 'cinema', categoryId: categories[1].id, category: categories[1], paid: false, date: "28/11/2018", amount: "30,00", type: "expense" } as Entry,

    ];

    return { categories, entries }
  }
}
