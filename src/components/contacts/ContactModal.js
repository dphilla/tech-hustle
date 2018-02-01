//const { Component } = React;
import React, { Component } from 'react';

class ContactModal extends Component {
   constructor(props) {
      super(props);

      this.state = { modal: false }
   }

   showModal() {
      this.setState({ modal: true });
   }

   closeModal() {
      this.setState({ modal: false });
   }

   render(){
      return (
         <div>
            <button
               onClick={this.showModal.bind(this)}
               type='button'
               className='btn btn-primary'>
               Show
            </button>
            <Modal isShown={this.state.modal} onClose={this.closeModal.bind(this)} />
         </div>
      );
   }
}

const Modal = props => {
   let popUp = props.isShown ? {display: 'block'} : null;

   return(
      <section id='modal' className='modal fade show' style={popUp}>
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <header className='modal-header'>
                  <h5 className='modal-title'>Title</h5>
               </header>
               <article className='modal-body'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </article>
               <div class="modal-footer">
                  <button
                     onClick={props.onClose}
                     type='button'
                     className='btn btn-danger'>
                     Close
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactModal;
