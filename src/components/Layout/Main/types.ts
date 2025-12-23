import type { ReactChildren } from '../../../types.g';

type ExtendableElementProps = ReactChildren & React.HTMLAttributes<HTMLDivElement>;

export type MainProps = React.ForwardRefRenderFunction<HTMLElement, ExtendableElementProps>;