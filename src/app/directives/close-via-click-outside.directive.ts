import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverWindow } from '@ng-bootstrap/ng-bootstrap/popover/popover';

@Directive({
  selector: '[closeNgbPopoverAtClick][ngbPopover]'
})
export class CloseNgbPopoverAtClickDirective implements OnInit, OnDestroy {
  public listener: () => void;

  @Input() private includeInsideClick: boolean = true;

  constructor(private elementRef: ElementRef,
              private ngbPopover: NgbPopover,
              private ngZone: NgZone,
              private cd: ChangeDetectorRef,
              private renderer: Renderer2
  ) {}

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.listener = this.renderer.listen('document', 'click', (event) => {
        this.closePopoverOnClickOutside(event);
      });
    });
  }

  public ngOnDestroy(): void {
    this.listener();
  }

  private closePopoverOnClickOutside(event: MouseEvent): void {
    if (this.ngbPopover && this.ngbPopover.isOpen()) {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        const popoverWindowRef: ComponentRef<NgbPopoverWindow> = (this.ngbPopover as any)._windowRef;
        if (this.includeInsideClick || !popoverWindowRef.location.nativeElement.contains(event.target)) {
          this.ngbPopover.close();
          this.cd.detectChanges();
        }
      }
    }
  }
}
