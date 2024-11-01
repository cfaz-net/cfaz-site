window.addEventListener('load', () => {
  formHubspot('newsletter', '8e7177fa-cb2f-4a31-934b-81e3a4c91ef8', 'b5f6f6fe-dfe8-442c-ac00-82619ceff512', '424ea7dc-406f-4818-a201-239b235335a8');
});

function formHubspot(targetId, ptFormId, esFormId, enFormId){
  const formOptions = {
    region: 'na1',
    portalId: '6654092',
  };
  
  if (document.getElementById(targetId)) {
    let language = document.getElementById('language');
    formOptions.formId = language.value === 'es' ? esFormId : (language.value === 'en' ? enFormId : ptFormId);
    formOptions.target = `#${targetId}`;
    hbspt.forms.create({ ...formOptions });
  }
}