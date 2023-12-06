import {useState} from 'react';

/**
 * a
 * @param {Object} initialData a
 * @param {Function} submitAction a
 * @return {Object}
 */
export default function useForm(initialData, submitAction) {
  const [data, setData] = useState(initialData);

  /**
       * Binding du formulaire et du state
       * @param {{name:String, value:'String'}} target
       */
  function handleChange({name, value}) {
    setData((prev) => ({...prev, [name]: value}));
  }

  /**
       * Submit du formulaire
       * @param {Event} event
       */
  function handleSubmit(event) {
    event.preventDefault();
    submitAction();
  }

  return {data, handleChange, handleSubmit};
}
