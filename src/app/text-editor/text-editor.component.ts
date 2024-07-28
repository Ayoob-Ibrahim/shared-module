import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, AfterViewInit {
  datadom: any = {};

  ngAfterViewInit(): void {
    this.datadom = {
      optionsButtons: document.querySelectorAll(".option-button"),
      advancedOptionButton: document.querySelectorAll(".adv-option-button"),
      writingArea: document.getElementById("text-input"),
      alignButtons: document.querySelectorAll(".align"),
      spacingButtons: document.querySelectorAll(".spacing"),
      formatButtons: document.querySelectorAll(".format"),
    }
    this.initializer()
  }
  ngOnInit(): void {

  }

  initializer = () => {
    this.btnHighLighter(this.datadom.alignButtons, true);
    this.btnHighLighter(this.datadom.spacingButtons, true);
    this.btnHighLighter(this.datadom.formatButtons, false);

    this.datadom.optionsButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.modifyText(button.id, false, null);
      });
    });

    this.datadom.advancedOptionButton.forEach((button) => {
      button.addEventListener("change", () => {
        this.modifyText(button.id, false, button.value);
      });
    });

  }

  modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
  };

  btnHighLighter(className, needsRemoval) {
    className.forEach((button) => {
      button.addEventListener("click", () => {
        this.buttonClicker(button, needsRemoval, className)
      })

    })
  }

  buttonClicker(button, needsRemoval, className) {

    console.log(button, 'button', className)
    if (needsRemoval) {
      let alreadyActive = false;

      if (button.classList.contains("active")) {
        alreadyActive = true;
      }
      this.RemoverHighLight(className)

      if (!alreadyActive) {
        button.classList.add("active");
      }

    } else {
      button.classList.toggle("active");
      this.styleTagAdd(button)
    }

  }

  styleTagAdd(style) {
    console.warn('class', style)
  }


  RemoverHighLight = (className) => {
    className.forEach((button) => {
      button.classList.remove("active");
    });
  }

  test() {
    console.log(this.datadom.writingArea)
  }

}
