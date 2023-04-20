export interface IGalaryItem {
    posterPath: string;
    link: string;
    name: string;
    content?: {
        title: string;
        subTitle?: string;
    }
}

export interface IGallaryItemProps {
    item: IGalaryItem;
    variant: 'vertical' | 'horizontal';
}