import AddButton from "../ui/AddButton";
import Input from "../ui/Input";
import Row from "../ui/Row";
import Search from "../ui/SearchBar ";

function Notes() {
  return (
    <Row type="vertical">
      <Row type="horizontal">
        
      </Row>
      <Row type="horizontal">
        <AddButton />
        <Search />
        <Input />
      </Row>
    </Row>
  );
}

export default Notes;
