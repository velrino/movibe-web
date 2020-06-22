import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BalladRenderDto } from './ballad.dto';
import { BaseItemDto } from 'src/app/admin/components/item/item.dto';

@Component({
  selector: 'app-admin-ballad',
  templateUrl: './ballad.page.html',
  styleUrls: ['./ballad.page.scss']
})
export class AdminBalladPage implements OnInit {
  show = false;
  data: BaseItemDto = {
    dto: BalladRenderDto,
    mode: 'create',
    alerts: {
      api: {
        create: {
          error: 'Falha ao criar',
          success: 'Criado com sucesso'
        },
        edit: {
          error: 'Falha ao atualizar',
          success: 'Atualizado com sucesso'
        },
        get: {
          error: 'Falha ao criar',
          success: 'Criado com sucesso'
        }
      }
    },
    routes: {
      api: {
        create: 'ballad',
        edit: null,
      }
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUrlId();
  }

  getUrlId() {
    this.route.params.subscribe(params => {
      if (params['slug']) {
        this.handleEdit(params['slug']);
      } else {
        this.show = true;
      }
    });
  }

  handleEdit(slug: string) {
    this.data.id = slug;
    this.data.mode = 'edit';
    this.data.routes.api.get = 'ballad/'.concat(slug);
    this.data.routes.api.edit = 'ballad/'.concat(slug);
    this.show = true;
  }

  title() {
    return (this.data.mode == 'create') ? 'Criar Balada' : 'Editar Balada';
  }

}
