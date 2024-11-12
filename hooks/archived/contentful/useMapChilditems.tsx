// @ts-nocheck

/** useMapChildItems */
/*********************/
export function useMapChildItems(
	component: string,
	data: Record<string, any>,
	props?: Record<string, any>
): JSX.Element[] {
	if (!Array.isArray(data)) return;

	return data?.map((item: any, index: number) => {
		switch (component) {
			case 'actions':
				return <LinkCTFL entry={item?.fields} {...props} key={index} />;
			case 'authors':
				return <Author entry={item?.fields} {...props} key={index} />;
			case 'blogRichTextComponents':
				return <RichTextComponent entry={item?.fields.content} {...props} key={index} sectionType='blog' />;
			case 'callToActions':
				return <CallToAction entry={item?.fields} {...props} key={index} />;
			case 'cards':
				return <Card entry={item?.fields} {...props} key={index} />;
			case 'company':
				return (
					<div className='py-2' key={index}>
						<Company entry={item?.fields} {...props} />
					</div>
				);
			case 'cardsCarouselItems':
				return (
					<SwiperSlide key={index}>
						<Card entry={item?.fields} {...props} />
					</SwiperSlide>
				);
			case 'carouselItems':
				return (
					<SwiperSlide key={index}>
						<CarouselItem entry={item?.fields} {...props} />
					</SwiperSlide>
				);
			case 'caseStudyRichTextComponents':
				return <RichTextComponent entry={item?.fields.content} {...props} key={index} sectionType='caseStudy' />;
			case 'categories':
				return <CategoryButton entry={item?.fields} {...props} key={index} />
			case 'footerNavigationItems':
				return <NavigationItem entry={item?.fields} {...props} parentComponent='footer' key={index} />
			case 'images':
				return (
					<ContentfulImage
						src={item?.fields.image.fields.file.url}
						width={item?.fields.image.fields.file.details.image.width}
						height={item?.fields.image.fields.file.details.image.height}
						alt={item?.fields.altText}
						key={index}
						caption={item?.fields?.caption}
					/>
				)
			case 'imageCarouselItems':
				return (
					<SwiperSlide className='cursor-pointer' key={index}>
						<ContentfulImage
							src={item?.fields.image.fields.file.url}
							width={item?.fields.image.fields.file.details.image.width}
							height={item?.fields.image.fields.file.details.image.height}
							alt={item?.fields.altText}
							key={index}
							caption={item?.fields?.caption}
							layout='responsive'
						/>
					</SwiperSlide>
				)
			case 'headerNavigationItems':
				return <NavigationItem entry={item?.fields} {...props} parentComponent='header' key={index} />
			case 'newsArticleRichTextComponent':
				return <RichTextComponent entry={item?.fields.content} {...props} key={index} sectionType='newsArticle' />
			case 'postPreviews':
				//the whole item is passed b/c the sys field is needed
				return <PostPreview entry={item} index={index} {...props} key={index} />;
			case 'richTextComponents':
				return <RichTextComponent entry={item?.fields.content} {...props} key={index} />
			case 'scrollingCards':
				return (
					<SwiperSlide key={index}>
						<Card entry={item?.fields} {...props} key={index} scrolling />
					</SwiperSlide>
				);
			case 'sections':
				return <Section sectionType={item?.sys.contentType.sys.id} section={item} key={item.sys.id} />
			case 'socialMediaLinks':
				return <LinkCTFL entry={item?.fields} {...props} key={index} className='justify-center items-center mr-4' />
			case 'testimonials':
				return <Testimonial entry={item?.fields} {...props} key={index} />;
			case 'testimonialCarouselItems':
				return (
					<SwiperSlide key={index}>
						<Testimonial entry={item?.fields} {...props} carousel={true} />
					</SwiperSlide>
				);
			case 'twoRowCarouselCards':
				return (
					<SwiperSlide key={index} >
						<Card entry={item?.fields} {...props} />
					</SwiperSlide>
				);
			default:
				break;
		}
	});
}