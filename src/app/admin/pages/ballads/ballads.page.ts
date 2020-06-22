import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api/api.service';
import { ListComponent } from 'src/app/admin/components/list/list.component';

@Component({
  selector: 'app-admin-ballads',
  templateUrl: './ballads.page.html',
  styleUrls: ['./ballads.page.scss']
})
export class AdminBalladsPage extends ListComponent implements OnInit {
  columns = {
    cnpj: 'CNPJ',
    name: 'Nome',
    slug: 'Apelido',
    responsibleName: "Responsável",
    telephoneNumber: "Telefone",
    email: "E-mail",
  }

  constructor(_apiService: ApiService) {
    super(_apiService);
  }

  ngOnInit() {
    this.component = 'ballads';
    this.defineRoutes();
    this.baseGetData();
  }

  defineRoutes() {
    this.routes.api.list = 'ballads'
    this.routes.web.create = 'ballads/create'
  }

  edit(id: string) {
    this.routes.web.edit = `ballads/edit/${id}`;
    this.baseGoToEditPage();
  }

  openDeleteModal(id: string) {
    console.log(id)
  }

  delete() {
    this.routes.api.delete = `ballads/${this.dataItemId}`;
    this.baseDelete();
  }

  data: any = [
    {
      "slug": "desmanche",
      "reasonSocial": "desmanche",
      "cnpj": "38352637000990",
      "responsibleName": "Liliane Dos Reis",
      "telephoneNumber": "(11) 986591126",
      "cellPhoneNumber": "(11) 94323-3311",
      "name": "Desmanche",
      "email": "contato@espacodesmanche.com",
      "description": "Inaugurado em 2015 onde era situado o antigo Clube Vegas na Augusta, o Clube Desmanche tem ambientação inspirada em um ferro-velho dos anos 70, com partes de veículos e velharias espalhadas.",
      "local": "Rua Augusta, N:509, 01305901.",
      "neighborhood": "Consolação, São Paulo.",
      "neighborhoodForUser": "Consolação",
      "usersQuantity": 11,
      "eventsQuantity": 1,
      "link": "espacodesmanche.com",
      "dateCreation": "10/04/2020 17:48:00",
      "rules": "Proibido entrada de menores de 18 anos",
      "imageUrl": [
        "https://res.cloudinary.com/duep7y7ve/image/upload/w_1000,h_400/v1591486087/desmanche/desmanche.jpg"
      ],
      "events": [
        "Sexta-Feira 13 - Open Bar da Maldade na Blitz Haus"
      ],
      "usersNames": [
        "Ivan Petryszin Filho",
        "Denner Mattos",
        "Liliane Santos",
        "Fabiana Santos",
        "julio Cezar Junior",
        "Nalva Silva",
        "Thamires Costa",
        "Deivid Santos",
        "Francislin Dos Reis",
        "Giovanni Fazio",
        "FRANS TV"
      ],
      "movibers": [
        "Francislin Dos Reis"
      ]
    },
    {
      "slug": "blitz",
      "reasonSocial": "blitz",
      "cnpj": "98766801000167",
      "responsibleName": "Francislin Dos Reis",
      "telephoneNumber": "11998756476",
      "cellPhoneNumber": "11998756987",
      "name": "Blitz",
      "email": "contato@blitzhaus.com.br",
      "description": "A Blitz Haus é um clube noturno de 3 andares localizado na Rua Augusta nº 657, centro de São Paulo. O ambiente possui Balada com Pista 3D, 3 Bares, Restaurante, Lounge com Sinuca, Pebolim e Arcades.",
      "local": "Rua Augusta, N:509, 01305901.",
      "neighborhood": "Consolação, São Paulo.",
      "neighborhoodForUser": "Consolação",
      "usersQuantity": 9,
      "eventsQuantity": 2,
      "link": "blitzhaus.com.br",
      "dateCreation": "07/04/2020 17:56:51",
      "rules": "Proibido entrada de menores de 18 anos",
      "imageUrl": [
        "https://res.cloudinary.com/duep7y7ve/image/upload/w_1000,h_400/v1591486404/blitz/blitz.jpg"
      ],
      "events": [
        "HOTPOP • Pop Divas • VIP até 22h na Blitz",
        "Quinta Grátis • Festa 0800-Pop-Funk na Blitz"
      ],
      "usersNames": [
        "Ivan Petryszin Filho",
        "Denner Mattos",
        "Liliane Santos",
        "Fabiana Santos",
        "julio Cezar Junior",
        "Nalva Silva",
        "Francislin Dos Reis",
        "Giovanni Fazio",
        "FRANS TV"
      ],
      "movibers": [
        "Francislin Dos Reis"
      ]
    },
    {
      "slug": "blitz",
      "reasonSocial": "blitz",
      "cnpj": "98766801000167",
      "responsibleName": "Francislin Dos Reis",
      "telephoneNumber": "11998756476",
      "cellPhoneNumber": "11998756987",
      "name": "Blitz",
      "email": "contato@blitzhaus.com.br",
      "description": "A Blitz Haus é um clube noturno de 3 andares localizado na Rua Augusta nº 657, centro de São Paulo. O ambiente possui Balada com Pista 3D, 3 Bares, Restaurante, Lounge com Sinuca, Pebolim e Arcades.",
      "local": "Rua Augusta, N:509, 01305901.",
      "neighborhood": "Consolação, São Paulo.",
      "neighborhoodForUser": "Consolação",
      "usersQuantity": 9,
      "eventsQuantity": 2,
      "link": "blitzhaus.com.br",
      "dateCreation": "07/04/2020 17:56:51",
      "rules": "Proibido entrada de menores de 18 anos",
      "imageUrl": [
        "https://res.cloudinary.com/duep7y7ve/image/upload/w_1000,h_400/v1591486404/blitz/blitz.jpg"
      ],
      "events": [
        "HOTPOP • Pop Divas • VIP até 22h na Blitz",
        "Quinta Grátis • Festa 0800-Pop-Funk na Blitz"
      ],
      "usersNames": [
        "Ivan Petryszin Filho",
        "Denner Mattos",
        "Liliane Santos",
        "Fabiana Santos",
        "julio Cezar Junior",
        "Nalva Silva",
        "Francislin Dos Reis",
        "Giovanni Fazio",
        "FRANS TV"
      ],
      "movibers": [
        "Francislin Dos Reis"
      ]
    }
  ]

}
