import {useNavigate} from 'react-router-dom';
import {insertContact} from '../services/contactService';
import ContactForm from '../components/ContactForm';

/**
 * a
 * @return {jsx}
 */
export default function ContactFormCreatePage() {
  const navigate = useNavigate();
  const initialData = {
    name: '',
    email: '',
    phone: '',
  };
  const submitAction = (data)=>{
    insertContact(data).then(()=>{
      navigate('/contacts');
    });
  };

  return (
    <>
      <h1>Create</h1>
      <ContactForm initialData={initialData} submitAction={submitAction}/>
    </>
  );
}
