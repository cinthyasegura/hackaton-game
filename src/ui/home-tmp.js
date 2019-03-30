import { userState } from '../controller/login.js';


export const homeTmp = () => {
  const tmp = document.createElement('section');
  tmp.setAttribute('id', 'home');
  tmp.innerHTML = `
    <div class="container-fluid padding">
        <div class="row padding">
           <div class="col-lg-6 center-photo">
                <img src="${userState().photoURL}" alt="imagen de usario">
            </div>
        </div>
    <div>
        <h4 class="text-center">${userState().displayName}</h4>
        <h4 class="text-center">Instrucciones</h4>
        <p>lorem ipsum</p>
        <button id="btn-play"> </button>
    </div>

    
    `;
    
  return tmp;
}; 