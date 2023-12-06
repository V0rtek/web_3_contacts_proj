import {Button, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useContactList from '../hooks/useContactList';

/**
 * a
 * @return {jsx}
 */
export default function ContactListePage() {
  const {contactList} = useContactList();
  return (
    <>
      <h1>Liste de contacts</h1>
      <ListGroup>
        {
          contactList.map((elt)=>
            <ListGroup.Item key={elt.id}>
              <Link to={`/contacts/${elt.id}`}>
                {elt.name}
              </Link>
            </ListGroup.Item>)
        }
      </ListGroup>
      <Button as={Link} to={'/contacts/new'}>Ajouter un contact</Button>
    </>
  );
}
