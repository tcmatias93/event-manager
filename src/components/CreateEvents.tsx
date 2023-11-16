import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const hoy = new Date()
const dia = hoy.getDate();
const mes = hoy.getMonth() + 1
const anio = hoy.getFullYear()



const validationSchema = Yup.object().shape({
  eventName: Yup.string().required('Este campo es obligatorio'),
  eventDate: Yup.date().required('Este campo es obligatorio').min(new Date(), `La fecha no puede ser anterior a hoy ${dia}/${mes}/${anio}`),
  eventHour: Yup.string().required('Este campo es obligatorio'),
  eventDescription: Yup.string().required('Este campo es obligatorio'),



});



interface FormData {
  eventName: string;
  eventDate: Date;
  eventHour: string
  eventDescription: string
}


const CreateEvent: React.FC = () => {
  const handleSubmit = (values: FormData) => {
    // Lógica para guardar el evento
    console.log('Nuevo evento:', values);
  };

  return (
    <div>
      <h1>Crear Evento</h1>
      <Formik
        initialValues={{ eventName: '', eventDate: new Date(), eventHour: '', eventDescription: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="eventName">Nombre del Evento</label>
            <Field type="text" id="eventName" name="eventName" />
            <ErrorMessage name="eventName" component="div" />
          </div>

          <div>
            <label htmlFor="eventDate">Fecha del Evento</label>
            <Field type="date" id="eventDate" name="eventDate" />
            <ErrorMessage name="eventDate" component="div" />
          </div>

          <div>
            <label htmlFor="eventHour">Hora del Evento</label>
            <Field type="time" id="eventHour" name="eventHour" />
            <ErrorMessage name="eventHour" component="div" />
          </div>

          <div>
            <label htmlFor="eventDescription">Descripcion del Evento</label>
            <Field type="text" id="eventDescription" name="eventDescription" />
            <ErrorMessage name="eventDescription" component="div" />
          </div>
          <button type="submit">Crear Evento</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateEvent;