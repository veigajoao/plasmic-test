// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nGDqHaYZo4FJYSN4xzLGB9
// Component: 5OmvPS-m8OAk

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_dashboard.module.css"; // plasmic-import: nGDqHaYZo4FJYSN4xzLGB9/projectcss
import sty from "./PlasmicTesteComponente.module.css"; // plasmic-import: 5OmvPS-m8OAk/css

createPlasmicElementProxy;

export type PlasmicTesteComponente__VariantMembers = {};
export type PlasmicTesteComponente__VariantsArgs = {};
type VariantPropType = keyof PlasmicTesteComponente__VariantsArgs;
export const PlasmicTesteComponente__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTesteComponente__ArgsType = {};
type ArgPropType = keyof PlasmicTesteComponente__ArgsType;
export const PlasmicTesteComponente__ArgProps = new Array<ArgPropType>();

export type PlasmicTesteComponente__OverridesType = {
  root?: p.Flex<"div">;
  cmsDataFetcher?: p.Flex<typeof CmsQueryRepeater>;
  freeBox?: p.Flex<"div">;
  cmsEntryField?: p.Flex<typeof CmsRowField>;
};

export interface DefaultTesteComponenteProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTesteComponente__RenderFunc(props: {
  variants: PlasmicTesteComponente__VariantsArgs;
  args: PlasmicTesteComponente__ArgsType;
  overrides: PlasmicTesteComponente__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <CmsQueryRepeater
        data-plasmic-name={"cmsDataFetcher"}
        data-plasmic-override={overrides.cmsDataFetcher}
        className={classNames("__wab_instance", sty.cmsDataFetcher)}
        desc={false}
        emptyMessage={
          <ph.DataCtxReader>
            {$ctx => (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eh5XR
                )}
              >
                {"No matching published entries found."}
              </div>
            )}
          </ph.DataCtxReader>
        }
        forceEmptyState={false}
        forceLoadingState={false}
        limit={0}
        loadingMessage={
          <ph.DataCtxReader>
            {$ctx => (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__znWi
                )}
              >
                {"Loading..."}
              </div>
            )}
          </ph.DataCtxReader>
        }
        noAutoRepeat={false}
        noLayout={false}
        useDraft={false}
      >
        <ph.DataCtxReader>
          {$ctx => (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <CmsRowField
                data-plasmic-name={"cmsEntryField"}
                data-plasmic-override={overrides.cmsEntryField}
                className={classNames("__wab_instance", sty.cmsEntryField)}
              />
            </div>
          )}
        </ph.DataCtxReader>
      </CmsQueryRepeater>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cmsDataFetcher", "freeBox", "cmsEntryField"],
  cmsDataFetcher: ["cmsDataFetcher", "freeBox", "cmsEntryField"],
  freeBox: ["freeBox", "cmsEntryField"],
  cmsEntryField: ["cmsEntryField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  cmsDataFetcher: typeof CmsQueryRepeater;
  freeBox: "div";
  cmsEntryField: typeof CmsRowField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTesteComponente__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTesteComponente__VariantsArgs;
    args?: PlasmicTesteComponente__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTesteComponente__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTesteComponente__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTesteComponente__ArgProps,
          internalVariantPropNames: PlasmicTesteComponente__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTesteComponente__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTesteComponente";
  } else {
    func.displayName = `PlasmicTesteComponente.${nodeName}`;
  }
  return func;
}

export const PlasmicTesteComponente = Object.assign(
  // Top-level PlasmicTesteComponente renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    freeBox: makeNodeComponent("freeBox"),
    cmsEntryField: makeNodeComponent("cmsEntryField"),

    // Metadata about props expected for PlasmicTesteComponente
    internalVariantProps: PlasmicTesteComponente__VariantProps,
    internalArgProps: PlasmicTesteComponente__ArgProps
  }
);

export default PlasmicTesteComponente;
/* prettier-ignore-end */
