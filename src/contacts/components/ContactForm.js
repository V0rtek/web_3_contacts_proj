import {Button, Form} from 'react-bootstrap';
import useForm from '../../_misc/hooks/useForm';

/**
 * a
 * @return {jsx}
 */
export default function ContactForm({initialData, submitAction}) {
  const {data, handleChange, handleSubmit} = useForm(initialData,
      () => submitAction(data));
  return (
    <>
      <h1>ContactForm</h1>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="nom"
            value={data.name} name='name'
            onChange={(e)=>handleChange(e.target)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Courriel</Form.Label>
          <Form.Control type="email" placeholder="courriel"
            value={data.email} name='email'
            onChange={(e)=>handleChange(e.target)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control type="phone" placeholder="téléphone"
            value={data.phone} name='phone'
            onChange={(e)=>handleChange(e.target)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Confirmer
        </Button>
      </Form>
    </>
  );
}

