// Types
import type {Product, ProductCustomization} from "@modules/product/types";

const defaultJuiceCustomizations: ProductCustomization[] = [
  {
    "id": "f1c8b2b7-5283-45eb-9341-94c679bb229b",
    "name": "Escolha o tipo de adoçante",
    "type": "single",
    "is_required": false,
    "options": [
      {
        "id": "4b156716-5587-4c5e-b5fc-bd83c4d11eb6",
        "name": "Açúcar",
        "price_modifier": 0.0
      },
      {
        "id": "9c21dce1-f918-4c2a-a32d-12ed58d3e0de",
        "name": "Mel",
        "price_modifier": 0.5
      },
      {
        "id": "c7beaa3e-82a7-445c-bd70-20e36fcb8400",
        "name": "Stevia",
        "price_modifier": 0.0
      }
    ]
  },
  {
    "id": "d44d2206-3b65-474f-898e-b63f8cda19ae",
    "name": "Com gelo",
    "type": "single",
    "is_required": true,
    "options": [
      {
        "id": "aeae82f1-c17f-44ab-b17e-08d46d3d24d1",
        "name": "Com gelo",
        "price_modifier": 0.0
      },
      {
        "id": "b8e58e42-846e-44a5-97f4-b4f90df92fa6",
        "name": "Sem gelo",
        "price_modifier": 0.0
      }
    ]
  },
  {
    "id": "87b103f3-5a84-4856-9eb5-7a803dcd2896",
    "name": "Com canudo",
    "type": "single",
    "is_required": true,
    "options": [
      {
        "id": "e209b3d7-c205-4c3f-9a98-588e82f8e660",
        "name": "Com canudo",
        "price_modifier": 0.0
      },
      {
        "id": "f3de7998-d405-43b0-b438-041a40fbd8b4",
        "name": "Sem canudo",
        "price_modifier": 0.0
      }
    ]
  }
]

const juices: Product[] = [
  {
    "id": "e3d59231-6b09-4ac0-86d8-c3b71b182e5f",
    "sku": "JUICE001",
    "name": "Suco de Laranja Natural",
    "picture": "/produtos/sucos/laranja.png",
    "base_price": 5.0,
    "promotion_price": 4.0,
    "description": "Suco fresco de laranja espremido na hora.",
    "rating": 4.5,
    "unit": "uni",
    "order_count": 150,
    "quantity_gap": 1,
    "categories": ["juices", "promotions"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["natural", "fresco", "vitamina C", "laranja", "refrescante"]
  },
  {
    "id": "2f43198d-b4b6-4b8e-8324-4ee3299c5bc5",
    "sku": "JUICE002",
    "name": "Suco de Maçã",
    "picture": "/produtos/sucos/maca.png",
    "base_price": 4.5,
    "description": "Suco de maçã natural, refrescante e saudável.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 120,
    "quantity_gap": 1,
    "categories": ["juices"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["maçã", "natural", "saudável", "refrescante", "vitaminas"]
  },
  {
    "id": "04583a87-4c31-445f-963f-5036f3edc8f9",
    "sku": "JUICE003",
    "name": "Suco Verde Detox",
    "picture": "/produtos/sucos/detox.png",
    "base_price": 7.0,
    "promotion_price": 5.5,
    "description": "Mistura refrescante de frutas e vegetais detox.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 80,
    "quantity_gap": 1,
    "categories": ["juices", "promotions"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["detox", "verde", "saudável", "fibras", "energético"]
  },
  {
    "id": "c45f3b0f-4e41-44f7-9f6e-b7ae35e2c8a2",
    "sku": "JUICE004",
    "name": "Suco de Abacaxi",
    "picture": "/produtos/sucos/abacaxi.png",
    "base_price": 6.0,
    "description": "Suco refrescante de abacaxi natural.",
    "rating": 4.4,
    "unit": "uni",
    "order_count": 90,
    "quantity_gap": 1,
    "categories": ["juices"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["abacaxi", "refrescante", "tropical", "digestivo", "natural"]
  },
  {
    "id": "33c1b9f5-ecf7-4a3c-9b68-c22ecb0ae243",
    "sku": "JUICE005",
    "name": "Suco de Manga",
    "picture": "/produtos/sucos/manga.png",
    "base_price": 6.5,
    "description": "Suco fresco de manga, ideal para o verão.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 75,
    "quantity_gap": 1,
    "categories": ["juices"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["manga", "fresco", "verão", "doce", "refrescante"]
  },
  {
    "id": "d8d2cd8d-f7b7-4b60-a7d0-d58cda1c0265",
    "sku": "JUICE006",
    "name": "Suco de Melancia",
    "picture": "/produtos/sucos/melancia.png",
    "base_price": 5.5,
    "promotion_price": 1.5,
    "description": "Suco de melancia refrescante e natural.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 65,
    "quantity_gap": 1,
    "categories": ["juices", "promotions"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["melancia", "refrescante", "hidratante", "verão", "natural"]
  },
  {
    "id": "bb2d8cba-cf94-4e0c-9b30-f257e92e459e",
    "sku": "JUICE007",
    "name": "Suco de Uva",
    "picture": "/produtos/sucos/uva.png",
    "base_price": 6.0,
    "description": "Suco natural de uva, saboroso e refrescante.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 50,
    "quantity_gap": 1,
    "categories": ["juices"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["uva", "natural", "antioxidante", "doce", "saudável"]
  },
  {
    "id": "b76fa6c0-fb3f-4eb5-95e3-0c516b5e681b",
    "sku": "JUICE008",
    "name": "Suco de Limão",
    "picture": "/produtos/sucos/limao.png",
    "base_price": 5.5,
    "description": "Suco azedo de limão, perfeito para os amantes de sabores cítricos.",
    "rating": 4.3,
    "unit": "uni",
    "order_count": 40,
    "quantity_gap": 1,
    "categories": ["juices"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["limão", "cítrico", "azedo", "refrescante", "natural"]
  },
  {
    "id": "f2e6f3ab-6c4e-4829-a7a3-37f63608cd57",
    "sku": "JUICE009",
    "name": "Suco de Cenoura",
    "picture": "/produtos/sucos/cenoura.png",
    "base_price": 5.0,
    "description": "Suco nutritivo de cenoura, ótimo para a saúde.",
    "rating": 4.5,
    "unit": "uni",
    "order_count": 30,
    "quantity_gap": 1,
    "categories": ["juices"],
    "customizations": defaultJuiceCustomizations,
    "tags": ["cenoura", "nutritivo", "saudável", "vitaminas", "natural"]
  }
];

const breads: Product[] = [
  {
    "id": "d53d6c92-17f3-4c9b-92ed-b6f46cbe5dc0",
    "sku": "BREAD001",
    "name": "Pão Francês",
    "picture": "/produtos/paes/frances.png",
    "base_price": 3.0,
    "description": "Pão francês fresquinho, ideal para o café da manhã.",
    "rating": 4.5,
    "unit": "uni",
    "order_count": 100,
    "quantity_gap": 1,
    "categories": ["breads"],
    "customizations": [],
    "tags": ["fresquinho", "café da manhã", "tradicional", "pão crocante"]
  },
  {
    "id": "b99b0d4a-289c-4f7e-8703-4eeff54e2c0a",
    "sku": "BREAD002",
    "name": "Pão de Queijo",
    "picture": "/produtos/paes/queijo.png",
    "base_price": 4.0,
    "description": "Delicioso pão de queijo quentinho.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 80,
    "quantity_gap": 1,
    "categories": ["breads"],
    "customizations": [],
    "tags": ["quentinho", "tradicional", "café da manhã", "mineiro"]
  },
  {
    "id": "77c10e55-9a6b-4535-899b-45642c5d763c",
    "sku": "BREAD003",
    "name": "Pão Integral",
    "picture": "/produtos/paes/integral.png",
    "base_price": 3.5,
    "promotion_price": 3,
    "description": "Pão integral saudável e saboroso.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 60,
    "quantity_gap": 1,
    "categories": ["breads", "promotions"],
    "customizations": [],
    "tags": ["saudável", "integral", "leve", "baixo teor calórico"]
  },
  {
    "id": "79b487de-3ac9-46ec-b012-ec57a3ae4503",
    "sku": "BREAD004",
    "name": "Pão de Milho",
    "picture": "/produtos/paes/milho.png",
    "base_price": 4.5,
    "promotion_price": 4,
    "description": "Pão de milho macio e saboroso.",
    "rating": 4.3,
    "unit": "uni",
    "order_count": 50,
    "quantity_gap": 1,
    "categories": ["breads", "promotions"],
    "customizations": [
      {
        "id": "f75e7f5e-182b-48a7-97d7-e67d29ab2b5b",
        "name": "Ingredientes adicionais",
        "type": "multiple",
        "is_required": false,
        "options": [
          {
            "id": "5ff3be95-81d7-4cf3-bb91-731a4f2d1c8b",
            "name": "Queijo",
            "price_modifier": 1.0
          },
          {
            "id": "caee05f4-21ae-4d8d-b3d2-682acfe8db2d",
            "name": "Ervas finas",
            "price_modifier": 0.5
          }
        ]
      }
    ],
    "tags": ["macio", "tradicional", "milho", "saboroso"]
  },
  {
    "id": "be4e5f91-c0f2-4b52-9460-8b7c89153c82",
    "sku": "BREAD005",
    "name": "Pão de Centeio",
    "picture": "/produtos/paes/centeio.png",
    "base_price": 4.2,
    "description": "Pão de centeio nutritivo e saboroso.",
    "rating": 4.4,
    "unit": "uni",
    "order_count": 40,
    "quantity_gap": 1,
    "categories": ["breads"],
    "customizations": [],
    "tags": ["nutritivo", "centeio", "rico em fibras", "saudável"]
  },
  {
    "id": "e28bbf77-1f1b-42a0-a6d0-4f1925c87a75",
    "sku": "BREAD006",
    "name": "Pão de Forma",
    "picture": "/produtos/paes/pao-de-forma.png",
    "base_price": 3.8,
    "description": "Pão de forma leve, perfeito para sanduíches.",
    "rating": 4.5,
    "unit": "uni",
    "order_count": 90,
    "quantity_gap": 1,
    "categories": ["breads"],
    "customizations": [],
    "tags": ["sanduíche", "café da manhã", "fácil de cortar", "macio"]
  },
  {
    "id": "8f499a01-80c3-4fc3-87e7-42b99eab644e",
    "sku": "BREAD007",
    "name": "Focaccia",
    "picture": "/produtos/paes/focaccia.png",
    "base_price": 5.0,
    "description": "Focaccia artesanal com alecrim e sal grosso.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 70,
    "quantity_gap": 1,
    "categories": ["breads"],
    "customizations": [
      {
        "id": "ad5bce9d-1f93-4f1c-8f62-11f69390c5b1",
        "name": "Escolha cobertura",
        "type": "multiple",
        "is_required": false,
        "options": [
          {
            "id": "d02b394b-4a38-457b-9f91-639d6e03e3d1",
            "name": "Queijo",
            "price_modifier": 1.0
          },
          {
            "id": "46e664bb-d7a4-4e53-9517-6e376c2f8c87",
            "name": "Tomate seco",
            "price_modifier": 1.5
          }
        ]
      }
    ],
    "tags": ["artesanal", "alecrim", "salgado", "italiano"]
  },
  {
    "id": "3c1f35cf-fb0b-4fa8-9c08-cf7ef048abcf",
    "sku": "BREAD008",
    "name": "Pão de Alho",
    "picture": "/produtos/paes/alho.png",
    "base_price": 4.0,
    "promotion_price": 3.75,
    "description": "Pão de alho quentinho e crocante.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 30,
    "quantity_gap": 1,
    "categories": ["breads", "promotions"],
    "customizations": [],
    "tags": ["sabor intenso", "crocante", "assado", "churrasco"]
  },
  {
    "id": "a3d3c8bc-f4bc-47b0-9d2c-208c12a5d1e5",
    "sku": "BREAD009",
    "name": "Pão de Batata",
    "picture": "/produtos/paes/batata.png",
    "base_price": 4.0,
    "description": "Pão de batata macio e saboroso.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 20,
    "quantity_gap": 1,
    "categories": ["breads"],
    "customizations": [],
    "tags": ["batata", "macio", "infantil", "lanche"]
  },
  {
    "id": "c6d104b5-3f2c-4a63-b21e-d31f79f9ef5b",
    "sku": "BREAD010",
    "name": "Pão de Mel",
    "picture": "/produtos/paes/mel.png",
    "base_price": 3.5,
    "description": "Pão de mel, ideal para o lanche da tarde.",
    "rating": 4.2,
    "unit": "uni",
    "order_count": 25,
    "quantity_gap": 1,
    "categories": ["breads"],
    "customizations": [],
    "tags": ["doce", "lanche da tarde", "tradicional", "sabor mel"]
  }
];

const cakes: Product[] = [
  {
    "id": "b52f55f6-78f1-48ae-8888-1c2e1f300a65",
    "sku": "CAKE001",
    "name": "Bolo de Chocolate",
    "picture": "/produtos/bolos/chocolate.png",
    "base_price": 25.0,
    "promotion_price": 23.99,
    "description": "Bolo de chocolate recheado e coberto com ganache.",
    "rating": 4.9,
    "unit": "kg",
    "order_count": 50,
    "quantity_gap": 0.5,
    "categories": ["cakes", "promotions"],
    "customizations": [
      {
        "id": "flavors",
        "name": "Escolha o sabor do recheio",
        "type": "single",
        "is_required": true,
        "options": [
          {"id": "filling_chocolate", "name": "Chocolate", "price_modifier": 0.0},
          {"id": "filling_strawberry", "name": "Morango", "price_modifier": 2.0},
          {"id": "filling_vanilla", "name": "Baunilha", "price_modifier": 1.5}
        ]
      },
      {
        "id": "toppings",
        "name": "Cobertura adicional",
        "type": "multiple",
        "is_required": false,
        "options": [
          {"id": "topping_nuts", "name": "Nozes", "price_modifier": 1.0},
          {"id": "topping_sprinkles", "name": "Granulado", "price_modifier": 0.5}
        ]
      }
    ],
    "tags": ["chocolate", "recheado", "sobremesa", "ganache"]
  },
  {
    "id": "9e88b27b-9274-45af-a3c5-69cb1d14c40c",
    "sku": "CAKE002",
    "name": "Bolo de Cenoura",
    "picture": "/produtos/bolos/cenoura.png",
    "base_price": 22.0,
    "description": "Bolo de cenoura com cobertura de chocolate.",
    "rating": 4.8,
    "unit": "kg",
    "order_count": 40,
    "quantity_gap": 0.5,
    "categories": ["cakes"],
    "customizations": [],
    "tags": ["cenoura", "caseiro", "infantil", "chocolate"]
  },
  {
    "id": "e64bbf6e-46f1-41d3-8c4a-bb20a20e5d8a",
    "sku": "CAKE003",
    "name": "Bolo de Limão",
    "picture": "/produtos/bolos/limao.png",
    "base_price": 20.0,
    "description": "Bolo de limão leve e refrescante.",
    "rating": 4.7,
    "unit": "kg",
    "order_count": 35,
    "quantity_gap": 0.5,
    "categories": ["cakes"],
    "customizations": [
      {
        "id": "frosting",
        "name": "Escolha a cobertura",
        "type": "single",
        "is_required": true,
        "options": [
          {"id": "frosting_lemon", "name": "Cobertura de limão", "price_modifier": 0.0},
          {"id": "frosting_chocolate", "name": "Cobertura de chocolate", "price_modifier": 1.5}
        ]
      }
    ],
    "tags": ["limão", "refrescante", "leve", "frutas"]
  },
  {
    "id": "6c9241d5-cccb-42cc-bb8e-7b78f539e00e",
    "sku": "CAKE004",
    "name": "Bolo de Fubá",
    "picture": "/produtos/bolos/fuba.png",
    "base_price": 18.0,
    "promotion_price": 17.95,
    "description": "Bolo de fubá com goiabada, uma delícia da culinária brasileira.",
    "rating": 4.6,
    "unit": "kg",
    "order_count": 30,
    "quantity_gap": 0.5,
    "categories": ["cakes", "promotions"],
    "customizations": [],
    "tags": ["fubá", "goiabada", "brasileiro", "tradicional"]
  },
  {
    "id": "4aa90b3d-7549-4189-a12e-3eb8efb9e9a5",
    "sku": "CAKE005",
    "name": "Bolo Red Velvet",
    "picture": "/produtos/bolos/redvelvet.png",
    "base_price": 30.0,
    "description": "Bolo red velvet com cream cheese, um clássico.",
    "rating": 4.9,
    "unit": "kg",
    "order_count": 20,
    "quantity_gap": 0.5,
    "categories": ["cakes"],
    "customizations": [
      {
        "id": "extraLayers",
        "name": "Adicionar camadas",
        "type": "single",
        "is_required": false,
        "options": [
          {"id": "layer_one", "name": "1 camada", "price_modifier": 0.0},
          {"id": "layer_two", "name": "2 camadas", "price_modifier": 5.0},
          {"id": "layer_three", "name": "3 camadas", "price_modifier": 10.0}
        ]
      }
    ],
    "tags": ["red velvet", "cream cheese", "clássico", "festivo"]
  },
  {
    "id": "d5a72874-4414-4f8d-88dc-d1b5944b568f",
    "sku": "CAKE006",
    "name": "Bolo de Morango",
    "picture": "/produtos/bolos/morango.png",
    "base_price": 28.0,
    "description": "Bolo de morango com chantilly, fresquinho e saboroso.",
    "rating": 4.8,
    "unit": "kg",
    "order_count": 25,
    "quantity_gap": 0.5,
    "categories": ["cakes"],
    "customizations": [],
    "tags": ["morango", "chantilly", "frutas", "fresquinho"]
  },
  {
    "id": "f719d251-2603-4344-88a0-eeb6b8f68b43",
    "sku": "CAKE007",
    "name": "Bolo de Baunilha",
    "picture": "/produtos/bolos/baunilha.png",
    "base_price": 20.0,
    "description": "Bolo de baunilha clássico, ideal para festas.",
    "rating": 4.5,
    "unit": "kg",
    "order_count": 15,
    "quantity_gap": 0.5,
    "categories": ["cakes"],
    "customizations": [
      {
        "id": "decorations",
        "name": "Decoração especial",
        "type": "multiple",
        "is_required": false,
        "options": [
          {"id": "decoration_fruits", "name": "Frutas frescas", "price_modifier": 3.0},
          {"id": "decoration_chocolate", "name": "Raspas de chocolate", "price_modifier": 2.0}
        ]
      }
    ],
    "tags": ["baunilha", "festa", "clássico", "versátil"]
  },
  {
    "id": "0e8c19b1-b9b5-41e7-b2a5-8e2c9de99f30",
    "sku": "CAKE008",
    "name": "Bolo de Coco",
    "picture": "/produtos/bolos/coco.png",
    "base_price": 24.0,
    "description": "Bolo de coco com cobertura de leite condensado.",
    "rating": 4.7,
    "unit": "kg",
    "order_count": 10,
    "quantity_gap": 0.5,
    "categories": ["cakes"],
    "customizations": [],
    "tags": ["coco", "leite condensado", "cremoso", "doce"]
  },
  {
    "id": "c6cbf0ed-f0ba-4dbb-9c05-2a629542066f",
    "sku": "CAKE009",
    "name": "Bolo de Pinha",
    "picture": "/produtos/bolos/pinha.png",
    "base_price": 26.0,
    "promotion_price": 22.0,
    "description": "Bolo de pinha, uma delícia tropical.",
    "rating": 4.4,
    "unit": "kg",
    "order_count": 8,
    "quantity_gap": 0.5,
    "categories": ["cakes", "promotions"],
    "customizations": [],
    "tags": ["pinha", "tropical", "diferente", "promocional"]
  },
  {
    "id": "b88e0b6e-b5e5-4fc1-9b90-79fa4d3e6a32",
    "sku": "CAKE010",
    "name": "Bolo de Maracujá",
    "picture": "/produtos/bolos/maracuja.png",
    "base_price": 22.0,
    "description": "Bolo de maracujá com cobertura de maracujá.",
    "rating": 4.6,
    "unit": "kg",
    "order_count": 5,
    "quantity_gap": 0.5,
    "categories": ["cakes"],
    "customizations": [],
    "tags": ["maracujá", "frutas", "fresco", "tropical"]
  }
];

const croissants: Product[] = [
  {
    "id": "9a8bc7a2-c4c3-4e56-b2a7-3b3f84093db4",
    "sku": "CROISSANT001",
    "name": "Croissant Tradicional",
    "picture": "/produtos/croissants/tradicional.png",
    "base_price": 4.0,
    "promotion_price": 3.0,
    "description": "Croissant clássico, crocante por fora e macio por dentro.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 100,
    "quantity_gap": 1,
    "tags": ["clássico", "crocante", "promocional"],
    "categories": ["croissants", "promotions"],
    "customizations": []
  },
  {
    "id": "c5d36885-2065-4ed1-b58e-e4e0c09e3969",
    "sku": "CROISSANT002",
    "name": "Croissant de Chocolate",
    "picture": "/produtos/croissants/chocolate.png",
    "base_price": 5.0,
    "description": "Croissant recheado com chocolate derretido.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 80,
    "quantity_gap": 1,
    "categories": ["croissants"],
    "tags": ["chocolate", "recheado", "doce"],
    "customizations": []
  },
  {
    "id": "e9f8c4bc-e8e0-46aa-bc90-2a3c1f781c29",
    "sku": "CROISSANT003",
    "name": "Croissant de Amêndoas",
    "picture": "/produtos/croissants/amendoas.png",
    "base_price": 5.5,
    "description": "Croissant recheado com pasta de amêndoas e coberto com amêndoas laminadas.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 60,
    "quantity_gap": 1,
    "categories": ["croissants"],
    "tags": ["amêndoas", "recheado", "cobertura"],
    "customizations": []
  },
  {
    "id": "a8cb33e5-639c-4e6e-a68c-b5634971f3f0",
    "sku": "CROISSANT004",
    "name": "Croissant de Presunto e Queijo",
    "picture": "/produtos/croissants/presunto-e-queijo.png",
    "base_price": 6.0,
    "description": "Croissant recheado com presunto e queijo, perfeito para o café da manhã.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 50,
    "quantity_gap": 1,
    "categories": ["croissants"],
    "tags": ["presunto", "queijo", "café da manhã"],
    "customizations": [
      {
        "id": "cheese_type",
        "name": "Escolha o tipo de queijo",
        "type": "single",
        "is_required": true,
        "options": [
          {
            "id": "cheese_mozzarella",
            "name": "Mussarela",
            "price_modifier": 0.0
          },
          {
            "id": "cheese_cheddar",
            "name": "Cheddar",
            "price_modifier": 1.0
          }
        ]
      }
    ]
  },
  {
    "id": "f8b64730-b641-4943-b60e-457c2b9d2c36",
    "sku": "CROISSANT005",
    "name": "Croissant de Frutas",
    "picture": "/produtos/croissants/frutas.png",
    "base_price": 5.0,
    "description": "Croissant recheado com frutas da estação e creme.",
    "rating": 4.5,
    "unit": "uni",
    "order_count": 40,
    "quantity_gap": 1,
    "categories": ["croissants"],
    "tags": ["frutas", "creme", "fresco"],
    "customizations": []
  },
  {
    "id": "8e2c03d4-ea9c-4af8-b81b-cab1ef0cf5af",
    "sku": "CROISSANT006",
    "name": "Mini Croissant",
    "picture": "/produtos/croissants/mini.png",
    "base_price": 2.5,
    "promotion_price": 2.15,
    "description": "Mini croissant ideal para lanches rápidos.",
    "rating": 4.4,
    "unit": "uni",
    "order_count": 70,
    "quantity_gap": 1,
    "tags": ["mini", "lanche", "promocional"],
    "categories": ["croissants", "promotions"],
    "customizations": []
  },
  {
    "id": "d4783f96-9270-4b56-9b0e-1df9c08f9b52",
    "sku": "CROISSANT007",
    "name": "Croissant de Baunilha",
    "picture": "/produtos/croissants/baunilha.png",
    "base_price": 5.0,
    "description": "Croissant recheado com creme de baunilha, uma delícia!",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 30,
    "quantity_gap": 1,
    "categories": ["croissants"],
    "tags": ["baunilha", "creme", "doce"],
    "customizations": []
  },
  {
    "id": "ff20704c-e4e5-4b9d-8dc5-18cfef1c7b9a",
    "sku": "CROISSANT008",
    "name": "Croissant Gourmet",
    "picture": "/produtos/croissants/gourmet.png",
    "base_price": 7.0,
    "description": "Croissant recheado com ingredientes especiais e ervas finas.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 20,
    "quantity_gap": 1,
    "categories": ["croissants"],
    "tags": ["gourmet", "ervas finas", "especial"],
    "customizations": [
      {
        "id": "add_spread",
        "name": "Adicionar recheio extra",
        "type": "multiple",
        "is_required": false,
        "options": [
          {
            "id": "spread_honey",
            "name": "Mel",
            "price_modifier": 1.0
          },
          {
            "id": "spread_jam",
            "name": "Gelete de frutas",
            "price_modifier": 1.5
          }
        ]
      }
    ]
  },
  {
    "id": "76dbbd62-0546-4e8f-b69c-348fba041ec2",
    "sku": "CROISSANT009",
    "name": "Croissant de Caramelo",
    "picture": "/produtos/croissants/caramelo.png",
    "base_price": 5.5,
    "description": "Croissant coberto com caramelo, para os amantes de doce.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 15,
    "quantity_gap": 1,
    "categories": ["croissants"],
    "tags": ["caramelo", "doce", "cobertura"],
    "customizations": []
  }
]

const baskets: Product[] = [
  {
    "id": "6d4995b3-b0bb-4b8e-b5ae-99c35a88d8f8",
    "sku": "BASKET001",
    "name": "Cesta de Café da Manhã",
    "picture": "/produtos/cestas/cafe-da-manha.png",
    "base_price": 50.0,
    "promotion_price": 47.50,
    "description": "Cesta recheada com pães, frutas, sucos e biscoitos.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 30,
    "quantity_gap": 1,
    "tags": ["café da manhã", "pães", "frutas", "promocional"],
    "categories": ["baskets", "promotions"],
    "customizations": [
      {
        "id": "juice_selection",
        "name": "Escolha o suco",
        "type": "single",
        "is_required": true,
        "options": [
          {
            "id": "juice_orange",
            "name": "Suco de Laranja",
            "price_modifier": 0.0
          },
          {
            "id": "juice_apple",
            "name": "Suco de Maçã",
            "price_modifier": 0.0
          },
          {
            "id": "juice_grape",
            "name": "Suco de Uva",
            "price_modifier": 0.0
          }
        ]
      }
    ]
  },
  {
    "id": "2f0b0e6d-7e98-4943-a18a-0a709b2442e4",
    "sku": "BASKET002",
    "name": "Cesta de Frutas",
    "picture": "/produtos/cestas/frutas.png",
    "base_price": 40.0,
    "description": "Cesta composta por diversas frutas frescas da estação.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 25,
    "quantity_gap": 1,
    "categories": ["baskets"],
    "tags": ["frutas", "fresco", "saudável"],
    "customizations": []
  },
  {
    "id": "2b6c2f70-9148-4a0b-8c1a-72b6e88e87a4",
    "sku": "BASKET003",
    "name": "Cesta Gourmet",
    "picture": "/produtos/cestas/gourmet.jpeg",
    "base_price": 100.0,
    "description": "Cesta gourmet com queijos, vinhos e pães especiais.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 15,
    "quantity_gap": 1,
    "categories": ["baskets"],
    "tags": ["gourmet", "queijos", "vinhos", "especial"],
    "customizations": []
  },
  {
    "id": "7ecb85a0-dcd9-4e61-85a6-80d15d2f4a7c",
    "sku": "BASKET004",
    "name": "Cesta de Biscoitos",
    "picture": "/produtos/cestas/biscoitos.png",
    "base_price": 30.0,
    "description": "Cesta com uma variedade de biscoitos artesanais.",
    "rating": 4.5,
    "unit": "uni",
    "order_count": 20,
    "quantity_gap": 1,
    "categories": ["baskets"],
    "tags": ["biscoitos", "artesanal", "variedade"],
    "customizations": [
      {
        "id": "cookie_types",
        "name": "Escolha os tipos de biscoitos",
        "type": "multiple",
        "is_required": true,
        "options": [
          {
            "id": "cookie_chocolate_chip",
            "name": "Biscoito de Chocolate",
            "price_modifier": 0.0
          },
          {
            "id": "cookie_pecan",
            "name": "Biscoito de Nozes",
            "price_modifier": 0.0
          },
          {
            "id": "cookie_ginger",
            "name": "Biscoito de Gengibre",
            "price_modifier": 0.0
          }
        ]
      }
    ]
  },
  {
    "id": "9b4de805-2269-4f0f-8a09-6f1a1bfe85af",
    "sku": "BASKET005",
    "name": "Cesta de Pães Artesanais",
    "picture": "/produtos/cestas/paes-artesanais.png",
    "base_price": 60.0,
    "description": "Cesta com seleção de pães artesanais variados.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 10,
    "quantity_gap": 1,
    "categories": ["baskets"],
    "tags": ["pães artesanais", "fresco", "assados"],
    "customizations": []
  },
  {
    "id": "fcb16351-2b63-4b04-9f54-d5d882e13818",
    "sku": "BASKET006",
    "name": "Cesta de Café com Leite",
    "picture": "/produtos/cestas/cafe-com-leite.png",
    "base_price": 45.0,
    "description": "Cesta ideal para o café da manhã, com café, leite e pães.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 12,
    "quantity_gap": 1,
    "categories": ["baskets"],
    "tags": ["café", "leite", "café da manhã"],
    "customizations": [
      {
        "id": "coffee_type",
        "name": "Escolha o tipo de café",
        "type": "single",
        "is_required": true,
        "options": [
          {
            "id": "coffee_espresso",
            "name": "Espresso",
            "price_modifier": 0.0
          },
          {
            "id": "coffee_brewed",
            "name": "Café coado",
            "price_modifier": 0.0
          }
        ]
      }
    ]
  },
  {
    "id": "3d62daaf-9f4f-4d7d-b978-9ac3b08f6826",
    "sku": "BASKET007",
    "name": "Cesta de Lanches",
    "picture": "/produtos/cestas/lanches.png",
    "base_price": 55.0,
    "promotion_price": 50.0,
    "description": "Cesta com snacks, pães e acompanhamentos.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 8,
    "quantity_gap": 1,
    "tags": ["snacks", "lanches", "acompanhamentos", "promocional"],
    "categories": ["baskets", "promotions"],
    "customizations": []
  },
  {
    "id": "a7e12570-5d95-4c96-9331-393b16b963c1",
    "sku": "BASKET008",
    "name": "Cesta de Natal",
    "picture": "/produtos/cestas/natal.png",
    "base_price": 150.0,
    "description": "Cesta festiva com produtos especiais para as festas de fim de ano.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 5,
    "quantity_gap": 1,
    "categories": ["baskets"],
    "tags": ["natal", "festivo", "especial"],
    "customizations": []
  },
  {
    "id": "7d70f836-dc82-42de-8f8f-d9b1f2aa3c7b",
    "sku": "BASKET009",
    "name": "Cesta de Doces",
    "picture": "/produtos/cestas/doces.png",
    "base_price": 40.0,
    "description": "Cesta recheada com diversos doces artesanais.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 6,
    "quantity_gap": 1,
    "categories": ["baskets"],
    "tags": ["doces", "artesanal", "delicioso"],
    "customizations": []
  },
  {
    "id": "abefb9d1-66fa-4b4b-b776-57e8946be8bb",
    "sku": "BASKET010",
    "name": "Cesta Vegana",
    "picture": "/produtos/cestas/vegana.png",
    "base_price": 70.0,
    "description": "Cesta com opções veganas, incluindo pães e snacks.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 7,
    "quantity_gap": 1,
    "categories": ["baskets"],
    "tags": ["vegano", "pães", "snacks", "saudável"],
    "customizations": []
  }
]

const donuts: Product[] = [
  {
    "id": "77411c9c-75b7-4f47-92ba-d6c7fae334af",
    "sku": "DONUT001",
    "name": "Donut Glaceado",
    "picture": "/produtos/donuts/glaceado.png",
    "base_price": 3.5,
    "promotion_price": 3.0,
    "description": "Donut clássico coberto com glacê doce.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 120,
    "quantity_gap": 1,
    "tags": ["glacê", "clássico", "doce", "tradicional"],
    "categories": ["donuts", "promotions"],
    "customizations": []
  },
  {
    "id": "f39b1a6b-3082-4c88-8d96-3b7f87d0ad73",
    "sku": "DONUT002",
    "name": "Donut de Chocolate",
    "picture": "/produtos/donuts/chocolate.png",
    "base_price": 4.0,
    "description": "Donut macio coberto com chocolate cremoso.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 100,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["chocolate", "cremoso", "favorito"],
    "customizations": []
  },
  {
    "id": "35df9ae5-d614-4b63-837e-b5b89f63cfa3",
    "sku": "DONUT003",
    "name": "Donut de Morango",
    "picture": "/produtos/donuts/morango.png",
    "base_price": 4.5,
    "description": "Donut recheado e coberto com geleia de morango.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 80,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["morango", "geleia", "fruta", "recheado"],
    "customizations": [
      {
        "id": "icing",
        "name": "Escolha a cobertura",
        "type": "single",
        "is_required": true,
        "options": [
          {
            "id": "icing_chocolate",
            "name": "Chocolate",
            "price_modifier": 0.5
          },
          {
            "id": "icing_vanilla",
            "name": "Baunilha",
            "price_modifier": 0.5
          }
        ]
      }
    ]
  },
  {
    "id": "ae2e2062-9e44-4045-81a3-19ebcfd8bd75",
    "sku": "DONUT004",
    "name": "Donut de Caramelo",
    "picture": "/produtos/donuts/caramelo.png",
    "base_price": 4.0,
    "promotion_price": 3.5,
    "description": "Donut recheado com caramelo artesanal.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 70,
    "quantity_gap": 1,
    "tags": ["caramelo", "artesanal", "doce", "recheado"],
    "categories": ["donuts", "promotions"],
    "customizations": []
  },
  {
    "id": "18f44639-7b8a-4f73-9db4-9c9e1c7d5148",
    "sku": "DONUT005",
    "name": "Donut Vegano",
    "picture": "/produtos/donuts/vegano.png",
    "base_price": 5.0,
    "description": "Donut sem ingredientes de origem animal, sabor baunilha.",
    "rating": 4.5,
    "unit": "uni",
    "order_count": 50,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["vegano", "baunilha", "sem origem animal"],
    "customizations": []
  },
  {
    "id": "82ab2d5f-e95a-40de-b7d1-8c5f01d9ab99",
    "sku": "DONUT006",
    "name": "Donut de Canela",
    "picture": "/produtos/donuts/canela.png",
    "base_price": 3.5,
    "description": "Donut polvilhado com açúcar e canela.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 85,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["canela", "açúcar", "clássico"],
    "customizations": []
  },
  {
    "id": "d133fd57-6c54-44e4-b46c-3e1faaffb162",
    "sku": "DONUT007",
    "name": "Donut de Limão",
    "picture": "/produtos/donuts/limao.png",
    "base_price": 4.5,
    "description": "Donut com cobertura azedinha de limão.",
    "rating": 4.4,
    "unit": "uni",
    "order_count": 60,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["limão", "azedinho", "refrescante"],
    "customizations": []
  },
  {
    "id": "5c5dff8c-3b23-4907-9274-d5428d836dbd",
    "sku": "DONUT008",
    "name": "Donut Oreo",
    "picture": "/produtos/donuts/oreo.png",
    "base_price": 5.5,
    "promotion_price": 4.5,
    "description": "Donut coberto com pedaços de Oreo e creme.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 40,
    "quantity_gap": 1,
    "tags": ["oreo", "creme", "biscoito", "gourmet"],
    "categories": ["donuts", "promotions"],
    "customizations": []
  },
  {
    "id": "46c51b4e-90ea-41d2-9cf8-f3c272d5e6e4",
    "sku": "DONUT009",
    "name": "Donut de Frutas Vermelhas",
    "picture": "/produtos/donuts/frutas-vermelhas.png",
    "base_price": 5.0,
    "description": "Donut recheado com frutas vermelhas.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 45,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["frutas vermelhas", "recheado", "fruta", "doce"],
    "customizations": []
  },
  {
    "id": "1cf1ffba-2f8f-4c5e-bb59-ea66b2442091",
    "sku": "DONUT010",
    "name": "Donut Matcha",
    "picture": "/produtos/donuts/matcha.png",
    "base_price": 6.0,
    "description": "Donut com cobertura de chá verde matcha.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 30,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["matcha", "chá verde", "especial", "gourmet"],
    "customizations": []
  },
  {
    "id": "d2500ec2-3f0a-4de0-b7e4-df3e9d0c7b53",
    "sku": "DONUT011",
    "name": "Donut Red Velvet",
    "picture": "/produtos/donuts/red-velvet.png",
    "base_price": 5.5,
    "description": "Donut de massa vermelha com cobertura cremosa.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 35,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["red velvet", "cremoso", "massa especial"],
    "customizations": []
  },
  {
    "id": "b19236b1-9a27-4c52-9175-84c1d2fbc871",
    "sku": "DONUT012",
    "name": "Donut de Doce de Leite",
    "picture": "/produtos/donuts/doce-de-leite.png",
    "base_price": 4.5,
    "promotion_price": 4.0,
    "description": "Donut recheado com doce de leite caseiro.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 55,
    "quantity_gap": 1,
    "tags": ["doce de leite", "caseiro", "recheado"],
    "categories": ["donuts", "promotions"],
    "customizations": []
  },
  {
    "id": "b195a6fa-53c7-48f8-b24b-8c9c3c5e5fd8",
    "sku": "DONUT013",
    "name": "Donut de Pistache",
    "picture": "/produtos/donuts/pistache.png",
    "base_price": 6.5,
    "description": "Donut coberto com creme e pedaços de pistache.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 25,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["pistache", "cremoso", "premium"],
    "customizations": []
  },
  {
    "id": "f9a85a2e-d4d2-4b98-9cb6-d2e6a0d64b83",
    "sku": "DONUT014",
    "name": "Donut Gourmet",
    "picture": "/produtos/donuts/gourmet.png",
    "base_price": 7.0,
    "description": "Donut premium com cobertura especial de Nutella.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 20,
    "quantity_gap": 1,
    "categories": ["donuts"],
    "tags": ["nutella", "premium", "especial", "gourmet"],
    "customizations": []
  }
]

const cookies: Product[] = [
  {
    "id": "82f8b8c8-0c47-43c4-a8ee-86b93a2553e1",
    "sku": "COOKIE001",
    "name": "Cookie de Chocolate com Nozes",
    "picture": "/produtos/cookies/chocolate-com-nozes.png",
    "base_price": 4.0,
    "description": "Cookie artesanal com pedaços de chocolate meio amargo e nozes crocantes.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 85,
    "quantity_gap": 1,
    "categories": ["cookies"],
    "customizations": [],
    "tags": ["chocolate", "nozes", "artesanal", "crocante"]
  },
  {
    "id": "c6e32c7b-1bfb-4d83-a69c-e2f04b58f827",
    "sku": "COOKIE002",
    "name": "Cookie de Aveia com Mel",
    "picture": "/produtos/cookies/aveia-com-mel.png",
    "base_price": 3.5,
    "description": "Um cookie macio e saudável, feito com aveia integral e um toque de mel.",
    "rating": 4.7,
    "unit": "uni",
    "order_count": 70,
    "quantity_gap": 1,
    "categories": ["cookies"],
    "customizations": [],
    "tags": ["aveia", "mel", "saudável", "macio"]
  },
  {
    "id": "b482e8ba-9641-494f-bc6d-7b77a6ccf1bc",
    "sku": "COOKIE003",
    "name": "Cookie de Manteiga de Amendoim",
    "picture": "/produtos/cookies/manteiga-de-amendoim.png",
    "base_price": 4.5,
    "description": "Delicioso cookie feito com manteiga de amendoim natural, ideal para os amantes desse sabor.",
    "rating": 4.8,
    "unit": "uni",
    "order_count": 65,
    "quantity_gap": 1,
    "categories": ["cookies"],
    "customizations": [],
    "tags": ["manteiga de amendoim", "sabor intenso", "cremoso", "artesanal"]
  },
  {
    "id": "a32429f7-0c32-4e69-80a7-2eb24a2290bc",
    "sku": "COOKIE004",
    "name": "Cookie Red Velvet",
    "picture": "/produtos/cookies/red-velvet.png",
    "base_price": 5.0,
    "description": "Cookie macio de red velvet com pedaços de chocolate branco.",
    "rating": 4.9,
    "unit": "uni",
    "order_count": 90,
    "quantity_gap": 1,
    "categories": ["cookies"],
    "customizations": [],
    "tags": ["red velvet", "chocolate branco", "macio", "gourmet"]
  },
  {
    "id": "2ff2355e-cb9d-4c52-b769-07ab1f3f1b67",
    "sku": "COOKIE005",
    "name": "Cookie de Frutas Secas",
    "picture": "/produtos/cookies/frutas-secas.png",
    "base_price": 4.5,
    "description": "Cookie recheado com uma mistura de frutas secas como uvas passas, damascos e cranberries.",
    "rating": 4.6,
    "unit": "uni",
    "order_count": 55,
    "quantity_gap": 1,
    "categories": ["cookies"],
    "customizations": [],
    "tags": ["frutas secas", "damasco", "cranberry", "saudável"]
  }
]

const products: Product[] = [
  ...juices,
  ...breads,
  ...cakes,
  ...croissants,
  ...baskets,
  ...donuts,
  ...cookies,
];

export default products;