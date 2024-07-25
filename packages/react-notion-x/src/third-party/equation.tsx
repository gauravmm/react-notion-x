import * as React from 'react';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { EquationBlock } from 'notion-types';
import { getBlockTitle } from 'notion-utils';

import { useNotionContext } from '../context';
import { cs } from '../utils';


export const Equation: React.FC<{
  block: EquationBlock
  math?: string
  inline?: boolean
  className?: string
}> = ({ block, math, inline = false, className }) => {
  const { recordMap } = useNotionContext()
  math = math || getBlockTitle(block, recordMap)
  if (!math) return null

  const TeX = inline ? InlineMath : BlockMath

  return (
    <span
      role='button'
      tabIndex={0}
      className={cs(
        'notion-equation',
        inline ? 'notion-equation-inline' : 'notion-equation-block',
        className
      )}
    >
      <TeX math={math} />
    </span>
  )
}
