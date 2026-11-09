import { cn } from '@/shared/lib/utils';
import { FallbackImage } from '../fallback-image';

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return <FallbackImage className={cn('w-[60px] h-[60px]', className)} src={src} />;
};
