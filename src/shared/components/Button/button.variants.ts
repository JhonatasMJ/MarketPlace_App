import { tv, type VariantProps } from "tailwind-variants"

export enum ButtonVariantsEnum { 
    FILLED = "field",
    OUTLINED = "outline",

}

export const buttonVariants = tv({
    slots: {
        base: "w-full h-[48px] border rounded-md px-4 flex-row items-center ",
        text:"font-semibold text-base",
        icon: ""
    },
    variants: {
        hasIcon: { 
            true: {
                base:"justify-between"
            },
            false: {
                base:"justify-center"
            }
        },
        isLoading: {
            true: {
                base:"opacity-60"
            },
        }, 
        isDisabled: {
            true: {
                base:"opacity-50"
            },
        },
        variant: {
            field: {
                base:"bg-purple-base border-purple-base text-white",
                text:"text-white"
            },
            outlined: {
                base:"bg-transparent border-purple-base",
                text:"text-purple-base"
            }
        }
    },
    defaultVariants: {
        hasIcon: false,
        isLoading: false,
        isDisabled: false,
        variant: ButtonVariantsEnum.FILLED,
    },
})

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>