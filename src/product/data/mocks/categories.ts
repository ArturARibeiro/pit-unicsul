import {ProductCategory} from "@modules/product/types";

const categories: ProductCategory[] = [
  {
    name: 'Promoções',
    slug: 'promotions',
    image: '/categorias/promocoes.png',
  },
  {
    name: 'Pães',
    slug: 'breads',
    image: '/categorias/paes.png',
  },
  {
    name: 'Bolos',
    slug: 'cakes',
    image: '/categorias/bolos.png',
  },
  {
    name: 'Sucos',
    slug: 'juices',
    image: '/categorias/sucos.png',
  },
  {
    name: 'Croissants',
    slug: 'croissants',
    image: '/categorias/croissants.png',
  },
  {
    name: 'Cestas',
    slug: 'baskets',
    image: '/categorias/cestas.png',
  },
]

export default categories;