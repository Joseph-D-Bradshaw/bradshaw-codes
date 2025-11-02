import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

export function makeDraggable({
	element,
	trigger
}: {
	element: HTMLElement;
	trigger?: HTMLElement;
}) {
	Draggable.create(element, { trigger, bounds: document.getElementById('screen') });
}
