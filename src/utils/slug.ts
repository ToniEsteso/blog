export function getSlug(id: string): string {
  return id.split('/').pop().replace('.md', '');
}
