import { Rule, SchematicContext, Tree, mergeWith, url, template, apply } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function botcli(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const sourceParametrizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings
      })
    ]);
    return mergeWith(sourceParametrizedTemplate)(tree, _context);
  };
}
