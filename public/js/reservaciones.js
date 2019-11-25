const init = function(){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){
    
    ev.preventDefault();
    
    document.getElementById('form-user').reset();
  
}

const send = function(ev){
    ev.preventDefault(); 
    ev.stopPropagation();
    
    let fails = validate();
   
    if(fails.length === 0){
        
        document.getElementById('form-user').submit();
    }else{
        
        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}


const validate = function(ev){
   
    let failures = [];
    let chk = document.getElementById('input-conf');
    if(!chk.checked){
       
        failures.push({input: 'input-conf', msg: 'Debe confirmar.'})
    }

    

    
    let first = document.getElementById('input-first');
    let calendario = document.getElementById('datepicker');
    
    if( first.value === ""){
        failures.push({input:'input-first', msg:'Llene este campo'})
    } 
    

    
    
    
    return failures;
}


document.addEventListener('DOMContentLoaded', init);