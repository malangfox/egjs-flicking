export interface SourceContext {
  options: { [key: string]: any };
  panels: InnerElement[];
  events?: { [key: string]: any };
  methods?: { [key: string]: any };
  siblings?: InnerElement[];
  plugins?: Plugin[];
  imports?: Array<string | string[]>;
  js?: React.ReactElement;
  react?: React.ReactElement;
  vue?: React.ReactElement;
  vue3?: React.ReactElement;
  angular?: React.ReactElement;
  preact?: React.ReactElement;
  svelte?: React.ReactElement;
  viewportClass?: string;
  style?: string;
}

export interface InnerElement {
  tag: string;
  content: string;
  isSlot?: boolean;
  style?: { [key: string]: string };
  class?: string;
}

// [name, options]
export type Plugin = [string, { [key: string]: any }];
