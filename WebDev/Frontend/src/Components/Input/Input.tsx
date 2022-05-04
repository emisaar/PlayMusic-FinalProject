import { Component, useState } from "react"
import { inputProps } from "../../Complements/Interfaces/inputTypes";


export default function Input(props:inputProps){

    const type = props.type || "text";
    const value = props.value || "";
    const label = props.label || "";
    const name = props.name || (Math.random() + 1).toString(36).substring(7);
    const isSolid = props.solid || false;
    const onChange = props.onChange;
    const regex = props.regex || "";
    const min = props.min || 0;
    let idx = props.idx;
    if(props.idx === undefined){
      idx = name;
    }
    const required = props.required || false;

    let [visible, setVisible] = useState(false);
    let [checked, setCheck] = useState(true);

    const hidePasswfunc  = () =>{
      setVisible(!visible)
    };
    const setChecked  = () =>{
      setCheck(!checked)
    };

    if(type==="checkbox" ){
      return(
        <div>
          <label className="switch">
            <input type="checkbox" name={idx} id={name} required={required} onChange={onChange} value={checked.toString()} onClick={setChecked} />
            <span className="slider round"></span>
          </label>
          <label className="switch__text">{label}</label>
        </div>
      );
    }else if(type==="radio" ){
      return(
        <div>
          <label className="switch">
            <input type="radio" name={idx}  id={name} required={required} onChange={onChange} value={value} />
            <span className="slider round"></span>
          </label>
          <label className="switch__text">{label}</label>
        </div>
      );
    }else if(type==="number" ){
      return(
        <div className="form__group field">
          <input type={type} className={isSolid? "form__field__solid" : "form__field"} placeholder={label} name={idx} id={name} required={required} onChange={onChange} min={min} step="1" value={value} />
          <label htmlFor={name} className="form__label"> {label} </label>
        </div>
      );
    }
    else if(type==="password" ){
      return(
        <div className="form__group field">
          <input type={visible? "text" : "password"} className={isSolid? "form__field__solid" : "form__field"} minLength={8} placeholder={label} name={name} id={name} required={required} onChange={onChange} />
          <label htmlFor={name} className="form__label"> {label} </label>
          <button className="form__icon" type="button" onClick={hidePasswfunc}>
            {visible?
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
            }

          </button>
        </div>
      );
    }

    return(
      <div className="form__group field">
        <input type={type} className={isSolid? "form__field__solid" : "form__field"} placeholder={label} name={idx} id={name} key={idx} required={required} onChange={onChange} value={value} />
        <label htmlFor={name} className="form__label"> {label} </label>
      </div>
    );
}
