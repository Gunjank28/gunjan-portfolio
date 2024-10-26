import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`As an aspiring Backend Developer specializing in Java, I am proficient in backend and database technologies. Known for my meticulous attention to detail and ability to adapt to new technologies, I focus on creating efficient and scalable solutions. Leveraging my robust problem-solving abilities and keen interest in cloud technologies and industry advancements, I am enthusiastic about contributing to a collaborative team atmosphere and evolving as a skilled backend professional.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
