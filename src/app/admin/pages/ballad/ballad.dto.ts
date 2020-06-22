import { BaseItemRenderDto } from 'src/app/admin/components/item/item.dto';

export class BalladRenderDto {
    slug: BaseItemRenderDto = {
        label: 'Slug',
        type: 'text',
        placeholder: 'Digite o slug(versão minificada da URL)'
    };
    title: BaseItemRenderDto = {
        label: 'Título',
        type: 'text',
        placeholder: 'Digite o título'
    };
    image: BaseItemRenderDto = {
        label: 'Imagem',
        type: 'text',
        placeholder: 'Link da imagem'
    };
    body: BaseItemRenderDto = {
        label: 'Descrição',
        type: 'text',
        placeholder: 'Escreva a descrição'
    };
}
