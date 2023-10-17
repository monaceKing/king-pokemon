import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defautColor: string = '#009688';
  private defaultHeight: number = 180;
  
  constructor(private el : ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
   }

   @Input('pokemonBorderCard') borderColor: string; // alias


  //  Lorque la souris entre dans le cadre d'un pokemon
   @HostListener('mouseenter') onMousEnter() {
    this.setBorder(this.borderColor || this.defautColor);
   }

     //  Lorque la souris sort du cadre d'un pokemon
   @HostListener('mouseleave') onMouseLeavethi(){
    this.setBorder(this.initialColor);
   }

   private setBorder(color : string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height : number){
    this.el.nativeElement.style.height = height + 'px';
  }
}
