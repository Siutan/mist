import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:bookmarks');
	const { data: bookmarks } = await supabase.from('bookmarks').select('id, title, short_desc, url, points(id, title, point)').order('created_at', { ascending: false });
	console.log(bookmarks);
	return { bookmarks: bookmarks ?? [] };
};
