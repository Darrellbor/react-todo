import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styles from "./AddTodo.css";
import Input from "../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";
import { updateObject, checkValidity } from "../../shared/utility";
import uuid from "uuid";

class AddTodo extends Component {
  redirect = null;
  state = {
    todoForm: {
      todo: {
        elementType: "textarea",
        elementConfig: {
          placeholder: "What do you have to do?"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },

      dueBy: {
        elementType: "input",
        elementConfig: {
          type: "date",
          placeholder: "When is this todo due?"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    todoAdded: false
  };

  createTodo = event => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.todoForm) {
      formData[formElementIdentifier] = this.state.todoForm[
        formElementIdentifier
      ].value;
    }
    formData["id"] = uuid();
    formData["completed"] = false;

    let myTodos = [];
    let theTodos = localStorage.getItem("todos");
    if (theTodos !== null) {
      theTodos = JSON.parse(theTodos);
      theTodos.unshift(formData);
      localStorage.setItem("todos", JSON.stringify(theTodos));
    } else {
      myTodos.push(formData);
      localStorage.setItem("todos", JSON.stringify(myTodos));
    }

    const clearValue = { ...this.state.todoForm };
    for (let formElements in clearValue) {
      const imuElement = { ...clearValue[formElements] };
      imuElement.value = "";
      clearValue[formElements] = imuElement;
    }

    this.setState({ todoForm: clearValue, todoAdded: true });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.todoForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.todoForm[inputIdentifier].validation
        )
      }
    );
    const updatedTodoForm = updateObject(this.state.todoForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedTodoForm) {
      formIsValid = updatedTodoForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ todoForm: updatedTodoForm, formIsValid: formIsValid });
  };

  inputValidationHandler = inputIdentifier => {
    const updatedFormElement = updateObject(
      this.state.todoForm[inputIdentifier],
      {
        touched: true
      }
    );

    const updatedTodoForm = updateObject(this.state.todoForm, {
      [inputIdentifier]: updatedFormElement
    });

    this.setState({ todoForm: updatedTodoForm });
  };

  render() {
    let summary = <Redirect to="/" />;
    const formElementsArray = [];
    for (let key in this.state.todoForm) {
      formElementsArray.push({
        id: key,
        config: this.state.todoForm[key]
      });
    }

    if (!this.state.todoAdded) {
      summary = (
        <div className={styles.todo_wrapper}>
          <div className={styles.todos}>
            <div className={styles.todo_header}>Create New Todo</div>
            <div className={styles.todo_body}>
              <form onSubmit={this.createTodo}>
                {formElementsArray.map(formElement => (
                  <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    touched={formElement.config.touched}
                    shouldValidate={formElement.config.validation}
                    changed={event =>
                      this.inputChangedHandler(event, formElement.id)
                    }
                    validationCheck={() =>
                      this.inputValidationHandler(formElement.id)
                    }
                  />
                ))}

                <Button disabled={!this.state.formIsValid}>Create Todo</Button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    return summary;
  }
}

export default AddTodo;
