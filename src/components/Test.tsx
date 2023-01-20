import type { Component } from "solid-js"
import { Hoverable } from "./Curzor"

export const Test: Component = () => {
	return (
		<Hoverable>
            <a href="//helloworld.com">Hello world</a>
		</Hoverable>
	)
}
