import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicbookComponent } from '../dynamicbook/dynamicbook.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  @ViewChild('childCanvas', { static: false }) childCanvas !: ElementRef;
  @ViewChild('bookContainer',{read:ViewContainerRef}) bookContainer!:ViewContainerRef;//동적바인딩.
  constructor( private composeFactoryResolver: ComponentFactoryResolver) { }
  
  ngAfterViewInit(): void {
      this.childCanvas.nativeElement.src ='https://contents.kyobobook.co.kr/dtl/author/2000009201.jpg';
  }

  composeDynamicBookCmp(){
    const comFactory = this.composeFactoryResolver.resolveComponentFactory(DynamicbookComponent);
     // 동적으로 컴포넌트 생성
    const componentRef = this.bookContainer.createComponent(comFactory);

    //  <ion-img src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788970121703.jpg" width="200"></ion-img>

    componentRef.instance.bookinfo='ISBN	9788970121703 발행(출시)일자	1995년 11월 01일'
  }
}
