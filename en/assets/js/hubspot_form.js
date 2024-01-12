(function () {
  "use strict";
  /* ------ Formulários Hubspot ------ */
  window.addEventListener('load', () => {
    // Telerradiologia
    if (document.getElementById('telerradiologia')) {
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "e376ceaf-f166-44ea-ae5e-1b3496892a43",
        target: '#telerradiologia'
      }

      let language = document.getElementById('language');

      if (language.value == 'es') {
        formOptions.formId = "71dc0388-92d1-4fff-96a8-299545e061a2"
      }
      else if (language.value == 'en') {
        formOptions.formId = "7304222d-f161-4b9a-a5eb-bd09c878309d"
      }
      else {
        formOptions.formId = "e376ceaf-f166-44ea-ae5e-1b3496892a43"
      }

      hbspt.forms.create(formOptions);
    }

    // Consultório
    if (document.getElementById('consultorios')) {
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "44bd69ae-b894-4476-bb23-c7125e388247",
        target: '#consultorios'
      }

      hbspt.forms.create(formOptions);
    }

    // Clinica
    if (document.getElementById('clinicas')) {
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "e0fcad69-c758-4bc7-b694-fe44cefb1af6",
        target: '#clinicas'
      }

      hbspt.forms.create(formOptions);
    }

    // Centros de Radiologia
    if (document.getElementById('centros_radiologia')) {
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "59d0ff11-a63b-4368-9ad7-725c4630dd9f",
        target: '#centros_radiologia'
      }

      hbspt.forms.create(formOptions);
    }

    // Centrais de Laudo
    if (document.getElementById('centrais_laudo')) {
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "86fe8d85-ad8c-4ea9-ae7e-0d202564ba12",
        target: '#centrais_laudo'
      }

      hbspt.forms.create(formOptions);
    }

    // Hospitais
    if (document.getElementById('hospitais')) {
      let formOptions = {
        region: "na1",
        portalId: "6654092",
        formId: "61452a6c-845e-4bf4-9fba-caa40a989e02",
        target: '#hospitais'
      }

      hbspt.forms.create(formOptions);
    }
  });

  /**
   * Newsletter
   */
  // window.addEventListener('load', () => {
  //   if(document.getElementById('newsletter')){
  //     hbspt.forms.create({
  //       region: "na1",
  //       portalId: "6654092",
  //       formId: "d9d0ff9f-80df-4d31-9ece-8615c93638f5",
  //       target: '#newsletter'
  //     });
  //   }
  // });
})