import { Component, EventEmitter, h, Prop, State, Event } from '@stencil/core';

@Component({
  tag: 'skz-toggle',
  styleUrl: 'toggle.scss',
  shadow: false,
  scoped: true
})
export class SkzToggle {

  @Prop()
  toggleId = this.generateId();

  @State()
  isChecked = false;

  @Event() changed: EventEmitter<boolean>;

  handleClick(): void {
    this.isChecked = !this.isChecked;
    this.changed.emit(this.isChecked);
  }

  private generateId(): string {
    return 'skz-' + Math.random().toString(36).substr(2, 5);
  }

  render() {
    return <div class="skz-toggle">
      <div
        class={{
         'toggle-btn': true,
         'toggle-btn-on': this.isChecked,
         'toggle-btn-off': !this.isChecked
        }}
        onClick={() => this.handleClick()}>
        <input
          type="checkbox"
          id={this.toggleId}
          checked={this.isChecked} />
      </div>
      <label htmlFor={this.toggleId}>
        <slot></slot>
      </label>
    </div>;
  }
}
