import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:bookmarks');
	const { data: bookmarks } = await supabase.from('bookmarks').select('id,title').order('id');
	return { bookmarks: bookmarks ?? [] };
};
