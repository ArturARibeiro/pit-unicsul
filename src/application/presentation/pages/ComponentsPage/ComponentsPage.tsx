import Button from "@common/presentation/components/atoms/Button";
import Input from "@common/presentation/components/atoms/Input";
import Checkbox from "@common/presentation/components/atoms/Checkbox";
import Radio from "@common/presentation/components/atoms/Radio/Radio.tsx";
import Switch from "@common/presentation/components/atoms/Switch";
import Select from "@common/presentation/components/atoms/Select/Select.tsx";
import Badge from "@common/presentation/components/atoms/Badge";
import Breadcrumb from "@common/presentation/components/atoms/Breadcrumb/Breadcrumb.tsx";

const ComponentsPage = () => {
  return <div className="container py-4">
    <h1>Página de componentes</h1>

    <div className="d-flex flex-column gap-2 mb-3">
      <h2>Botões</h2>
      <Button>
        <i className="bi bi-bell-fill"></i>
        Hello World
      </Button>
      <Button variant="ghost">
        <i className="bi bi-airplane-fill"></i>
        Hello World
      </Button>
      <Button variant="outline">
        <i className="bi bi-balloon-fill"></i>
        Hello World
      </Button>
    </div>

    <div className="d-flex flex-column gap-2 mb-3">
      <h2>Entrada de dados</h2>
      <Input placeholder="Buscar"/>

      <Select
        placeholder="Selecione uma opção"
        options={[
          {value: 1, name: 'Opção 1'},
          {value: 2, name: 'Opção 2'},
          {value: 3, name: 'Opção 3'},
          {value: 4, name: 'Opção 4'},
          {value: 5, name: 'Opção 5'},
          {value: 6, name: 'Opção 6'},
          {value: 7, name: 'Opção 7'},
        ]}
      />

      <label className="d-inline-flex align-items-center gap-2 py-2">
        <Checkbox /> Hello World
      </label>

      <label className="d-inline-flex align-items-center gap-2 py-2">
        <Radio /> Hello World
      </label>

      <label className="d-inline-flex align-items-center gap-2 py-2">
        <Switch /> Hello World
      </label>
    </div>

    <div className="d-flex flex-column gap-2 mb-3">
      <h2>Badges</h2>
      <Badge variant="info">Hello World</Badge>
      <Badge variant="success">Hello World</Badge>
      <Badge variant="danger">Hello World</Badge>
      <Badge variant="warning">Hello World</Badge>
    </div>

    <div className="d-flex flex-column gap-2 mb-3">
      <h1>Breadcrumb</h1>
      <Breadcrumb
        items={[
          {name: "Home", href: "/"},
          {name: "About", href: "/about"},
          {name: "Hello World"}
        ]}
      />
    </div>
  </div>
}

export default ComponentsPage;