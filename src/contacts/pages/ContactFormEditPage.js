import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getContactById, updateContact} from '../services/contactService';
import ContactForm from '../components/ContactForm';

/**
 * a
 * @return {jsx}
 */
export default function ContactFormEditPage() {
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState();
  const {id} = useParams();
  useEffect(()=>{
    getContactById(id).then((res)=>setInitialData(res));
  }, [id]);
  const submitAction = (data)=>{
    updateContact(data).then(()=>{
      navigate('/contacts');
    });
  };

  if (!initialData) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <>
      <h1>Edit</h1>
      <ContactForm initialData={initialData} submitAction={submitAction}/>
    </>
  );
}
